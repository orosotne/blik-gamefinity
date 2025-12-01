import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// HTML šablóna pre potvrdzovací email zákazníkovi
function getConfirmationEmailTemplate(name: string, reason: string, company: string, message: string): string {
  const firstName = name.split(' ')[0]; // Použijeme len krstné meno pre priateľskejší tón
  
  return `
<!DOCTYPE html>
<html lang="sk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0a0a0f;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #0a0a0f;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #131318; border-radius: 16px; overflow: hidden; border: 1px solid #2a2a35;">
          
          <!-- Header s gradientom -->
          <tr>
            <td style="background: linear-gradient(135deg, #0066FF 0%, #00D9A6 100%); padding: 32px 40px; text-align: center;">
              <!-- Logo -->
              <table role="presentation" cellspacing="0" cellpadding="0" style="margin: 0 auto 12px auto;">
                <tr>
                  <td style="text-align: center; vertical-align: middle;">
                    <img src="https://blik.gamefinity.sk/logo_blik.png" alt="BLIK icon" width="56" height="56" style="display: inline-block; vertical-align: middle; border-radius: 12px;" />
                    <img src="https://blik.gamefinity.sk/BLIK_nazov.png" alt="BLIK" height="28" style="display: inline-block; vertical-align: middle; margin-left: 8px;" />
                  </td>
                </tr>
              </table>
              <p style="margin: 4px 0 0 0; color: rgba(255,255,255,0.9); font-size: 13px;">
                Gamefinity
              </p>
            </td>
          </tr>
          
          <!-- Hlavný obsah -->
          <tr>
            <td style="padding: 40px;">
              <h2 style="margin: 0 0 16px 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                Ďakujeme za vašu správu!
              </h2>
              
              <p style="margin: 0 0 24px 0; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                Dobrý deň <span style="color: #ffffff; font-weight: 500;">${firstName}</span>,
              </p>
              
              <p style="margin: 0 0 32px 0; color: #a1a1aa; font-size: 16px; line-height: 1.6;">
                vašu správu sme úspešne prijali. Budeme vás kontaktovať 
                <span style="color: #00D9A6; font-weight: 500;">do 24 hodín</span>.
              </p>
              
              <!-- Súhrn správy -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #1a1a22; border-radius: 12px; border: 1px solid #2a2a35;">
                <tr>
                  <td style="padding: 24px;">
                    <p style="margin: 0 0 16px 0; color: #0066FF; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                      📋 Súhrn vašej správy
                    </p>
                    
                    ${reason ? `
                    <p style="margin: 0 0 8px 0; color: #71717a; font-size: 14px;">
                      <span style="color: #a1a1aa;">Dôvod:</span> 
                      <span style="color: #ffffff;">${reason}</span>
                    </p>
                    ` : ''}
                    
                    ${company ? `
                    <p style="margin: 0 0 16px 0; color: #71717a; font-size: 14px;">
                      <span style="color: #a1a1aa;">Spoločnosť:</span> 
                      <span style="color: #ffffff;">${company}</span>
                    </p>
                    ` : ''}
                    
                    <div style="border-top: 1px solid #2a2a35; padding-top: 16px; margin-top: 8px;">
                      <p style="margin: 0 0 8px 0; color: #a1a1aa; font-size: 14px; font-weight: 500;">
                        Vaša správa:
                      </p>
                      <p style="margin: 0; color: #d4d4d8; font-size: 14px; line-height: 1.6; font-style: italic;">
                        "${message.replace(/\n/g, '<br>')}"
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
              
              <!-- CTA sekcia -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-top: 32px;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 16px 0; color: #71717a; font-size: 14px;">
                      Medzitým sa môžete pozrieť na:
                    </p>
                    <a href="https://blik.gamefinity.sk/ako-to-funguje" style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #0066FF 0%, #00D9A6 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500; margin: 0 8px 8px 0;">
                      Ako BLIK funguje →
                    </a>
                    <a href="https://blik.gamefinity.sk/riesenia" style="display: inline-block; padding: 12px 24px; background-color: #2a2a35; color: #ffffff; text-decoration: none; border-radius: 8px; font-size: 14px; font-weight: 500;">
                      Naše riešenia
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #0a0a0f; padding: 32px 40px; border-top: 1px solid #2a2a35;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 8px 0; color: #ffffff; font-size: 14px; font-weight: 500;">
                      S pozdravom,<br>
                      <span style="color: #00D9A6;">Tím Gamefinity</span>
                    </p>
                    
                    <p style="margin: 16px 0 0 0; color: #71717a; font-size: 13px; line-height: 1.8;">
                      📧 <a href="mailto:martin.miskeje@gamefinity.sk" style="color: #a1a1aa; text-decoration: none;">martin.miskeje@gamefinity.sk</a><br>
                      📞 <a href="tel:+421917588738" style="color: #a1a1aa; text-decoration: none;">+421 917 588 738</a><br>
                      🌐 <a href="https://blik.gamefinity.sk" style="color: #0066FF; text-decoration: none;">blik.gamefinity.sk</a>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
        
        <!-- Spodný text -->
        <p style="margin: 24px 0 0 0; color: #52525b; font-size: 12px; text-align: center;">
          Tento email bol automaticky vygenerovaný po odoslaní kontaktného formulára.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

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

    // 1. Email pre teba (notifikácia)
    const { error: notificationError } = await resend.emails.send({
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

    if (notificationError) {
      console.error('Resend notification error:', notificationError);
      return NextResponse.json(
        { error: 'Nepodarilo sa odoslať email' },
        { status: 500 }
      );
    }

    // 2. Email pre zákazníka (potvrdenie)
    const { error: confirmationError } = await resend.emails.send({
      from: 'BLIK Gamefinity <noreply@blik.gamefinity.sk>',
      to: [email],
      subject: 'Ďakujeme za vašu správu | BLIK Gamefinity',
      html: getConfirmationEmailTemplate(name, reason || '', company || '', message),
    });

    if (confirmationError) {
      // Logujeme chybu, ale nevraciame error - hlavný email bol odoslaný
      console.error('Resend confirmation error:', confirmationError);
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

