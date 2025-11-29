import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Rate limiting - jednoduchá in-memory implementácia
// V produkcii by bolo lepšie použiť Redis alebo Upstash
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hodina
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 emailov za hodinu z jednej IP

function getClientIP(request: Request): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }
  const realIP = request.headers.get('x-real-ip');
  if (realIP) {
    return realIP;
  }
  return 'unknown';
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Vyčistiť staré záznamy
  if (record && now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.delete(ip);
  }

  const currentRecord = rateLimitMap.get(ip);
  
  if (!currentRecord) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (currentRecord.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }

  currentRecord.count++;
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - currentRecord.count };
}

export async function POST(request: Request) {
  try {
    // Rate limiting check
    const clientIP = getClientIP(request);
    const rateLimit = checkRateLimit(clientIP);
    
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Príliš veľa požiadaviek. Skúste znova neskôr.' },
        { status: 429 }
      );
    }

    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email služba nie je nakonfigurovaná' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, reason, message, website } = await request.json();

    // Honeypot check - ak je "website" pole vyplnené, je to bot
    if (website) {
      // Tvárime sa, že všetko prebehlo OK, ale email neodošleme
      console.log('Honeypot triggered - bot detected from IP:', clientIP);
      return NextResponse.json({ success: true });
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Chýbajú povinné polia' },
        { status: 400 }
      );
    }

    // Základná validácia emailu
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Neplatný formát emailu' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'BLIK Gamefinity <noreply@blik.gamefinity.sk>',
      to: ['martin.miskeje@gamefinity.sk'],
      replyTo: email,
      subject: `[Kontakt] ${reason || 'Správa'} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Nová správa z kontaktného formulára</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Meno:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Spoločnosť:</strong> ${company || '-'}</p>
          <p><strong>Dôvod kontaktovania:</strong> ${reason || '-'}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Správa:</strong></p>
          <p style="background: #f3f4f6; padding: 16px; border-radius: 8px;">${message.replace(/\n/g, '<br>')}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <p style="color: #6b7280; font-size: 12px;">
            Odoslané z webu blik.gamefinity.sk
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Nepodarilo sa odoslať email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Interná chyba servera' },
      { status: 500 }
    );
  }
}

