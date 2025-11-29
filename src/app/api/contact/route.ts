import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Check for API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email služba nie je nakonfigurovaná' },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, company, reason, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Chýbajú povinné polia' },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: 'BLIK Gamefinity <noreply@blik.gamefinity.sk>',
      to: ['info@gamefinity.sk'],
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

