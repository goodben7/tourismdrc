import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendBookingConfirmationEmail = async ({
  email,
  name,
  packageName,
  startDate,
  numberOfPeople,
  budget
}: {
  email: string;
  name: string;
  packageName: string;
  startDate: string;
  numberOfPeople: string;
  budget: string;
}) => {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
  const logoUrl = `${appUrl}/logo.jpeg`;

  try {
    const { data, error } = await resend.emails.send({
      from: 'TourismDRC <onboarding@resend.dev>',
      to: [email],
      subject: `Confirmation de votre reservation : ${packageName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
            .header { background-color: #000000; padding: 50px 20px; text-align: center; }
            .content { padding: 40px; text-align: center; color: #1e293b; }
            .logo { width: 240px; height: auto; display: block; margin: 0 auto; }
            .badge { display: inline-block; padding: 6px 16px; border-radius: 6px; background-color: #fef2f2; color: #d92626; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 30px; }
            .title { font-size: 26px; font-weight: 800; color: #0f172a; margin: 0 0 12px 0; letter-spacing: -0.025em; }
            .tagline { font-size: 15px; color: #004080; font-weight: 600; margin-bottom: 40px; }
            .details-card { background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 40px; text-align: left; overflow: hidden; }
            .details-head { background-color: #f8fafc; padding: 18px 24px; border-bottom: 1px solid #e2e8f0; font-size: 11px; font-weight: 800; color: #64748b; text-transform: uppercase; letter-spacing: 1.5px; }
            .details-body { padding: 0 24px; }
            .info-table { width: 100%; border-collapse: collapse; }
            .info-td { padding: 20px 0; border-bottom: 1px solid #f1f5f9; }
            .info-label { color: #64748b; font-size: 13px; font-weight: 500; }
            .info-value { text-align: right; font-weight: 700; color: #0f172a; font-size: 14px; }
            .total-box { padding: 24px; background-color: #f8fafc; border-top: 2px solid #e2e8f0; margin-top: 0; }
            .total-price { font-size: 28px; font-weight: 900; color: #d92626; margin-left: 20px; }
            .button { display: inline-block; padding: 18px 44px; background-color: #d92626; color: #ffffff !important; text-decoration: none; border-radius: 8px; font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; }
            .footer { padding: 40px 20px; text-align: center; background-color: #f8fafc; border-top: 1px solid #e2e8f0; }
            .footer-copy { font-size: 12px; color: #94a3b8; margin: 0; }
            .footer-tag { font-size: 11px; color: #004080; font-weight: 700; margin-top: 10px; text-transform: uppercase; letter-spacing: 1px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="${logoUrl}" alt="Tourism DRC" class="logo" />
            </div>
            <div class="content">
              <div class="badge">Confirmation Officielle</div>
              <h1 class="title">Merci pour votre confiance, ${name}</h1>
              <p class="tagline">Discover the heart of africa, une experience incroyable.</p>
              
              <div class="details-card">
                <div class="details-head">Recapitulatif de votre expedition</div>
                <div class="details-body">
                  <table class="info-table">
                    <tr>
                      <td class="info-td"><span class="info-label">Forfait choisi</span></td>
                      <td class="info-td" style="text-align: right;"><span class="info-value">${packageName}</span></td>
                    </tr>
                    <tr>
                      <td class="info-td"><span class="info-label">Date de depart</span></td>
                      <td class="info-td" style="text-align: right;"><span class="info-value">${new Date(startDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span></td>
                    </tr>
                    <tr>
                      <td class="info-td" style="border-bottom: none;"><span class="info-label">Nombre de voyageurs</span></td>
                      <td class="info-td" style="text-align: right; border-bottom: none;"><span class="info-value">${numberOfPeople} Voyageur(s)</span></td>
                    </tr>
                  </table>
                </div>
                <div class="total-box">
                  <table width="100%">
                    <tr>
                      <td style="font-size: 13px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 1px;">Montant Total</td>
                      <td style="text-align: right;"><span class="total-price">$${budget}</span></td>
                    </tr>
                  </table>
                </div>
              </div>

              <div style="margin-top: 40px;">
                <p style="font-size: 14px; color: #64748b; margin-bottom: 24px;">Une question sur votre voyage ? Notre equipe est disponible 24/7.</p>
                <a href="${appUrl}/contact" class="button">Contacter le support</a>
              </div>
            </div>
            <div class="footer">
              <p class="footer-copy">Copyright © 2026 Tourism DRC. All rights reserved.</p>
              <div class="footer-tag">Discover the heart of africa</div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
       console.error('Resend Email Error:', error);
       return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error('Catch Email Error:', err);
    return { success: false, error: err };
  }
};
