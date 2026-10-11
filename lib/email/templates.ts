export interface EnquiryDetails {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const SITE_URL = "https://phytogenic.co.in";

function layout(options: { preheader: string; heading: string; body: string }) {
  const { preheader, heading, body } = options;
  return `
  <!doctype html>
  <html lang="en">
    <body style="margin:0;padding:0;background-color:#f7efd8;font-family:Georgia,'Times New Roman',serif;">
      <span style="display:none;font-size:1px;color:#f7efd8;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">
        ${preheader}
      </span>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7efd8;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(23,52,38,0.12);">
              <tr>
                <td style="background-color:#173426;padding:28px 32px;text-align:center;">
                  <span style="font-size:22px;font-weight:bold;color:#fdfaf0;letter-spacing:0.5px;">
                    Phytogenic Life Science
                  </span>
                  <div style="margin-top:4px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#b2bf9f;">
                    Herbal Extracts &amp; Natural Actives
                  </div>
                </td>
              </tr>
              <tr>
                <td style="padding:36px 32px;">
                  <h1 style="margin:0 0 16px;font-size:20px;color:#173426;">${heading}</h1>
                  ${body}
                </td>
              </tr>
              <tr>
                <td style="background-color:#f6f7f4;padding:24px 32px;border-top:1px solid #e8ebe2;">
                  <p style="margin:0;font-size:12px;line-height:1.7;color:#5f6d49;">
                    Phytogenic Life Science · Landmark Cyber Park, 3rd floor, Sector 67, Gurugram, Haryana<br />
                    sales@phytogenic.co.in · +91-9599177616
                  </p>
                  <p style="margin:12px 0 0;font-size:11px;color:#93a478;">
                    This email was sent from the enquiry form on
                    <a href="${SITE_URL}" style="color:#2c6b4a;text-decoration:none;">${SITE_URL.replace("https://", "")}</a>.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;color:#78895c;width:110px;vertical-align:top;">
        ${label}
      </td>
      <td style="padding:8px 0;font-size:14px;color:#173426;vertical-align:top;">
        ${value}
      </td>
    </tr>`;
}

export function adminNotificationEmail({ name, email, phone, message }: EnquiryDetails) {
  const body = `
    <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#4b573b;">
      You've received a new enquiry from the Phytogenic website contact form.
    </p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
      ${row("Name", name)}
      ${row("Email", `<a href="mailto:${email}" style="color:#2c6b4a;">${email}</a>`)}
      ${row("Phone", `<a href="tel:${phone}" style="color:#2c6b4a;">${phone}</a>`)}
    </table>
    <div style="background-color:#f6f7f4;border-radius:12px;padding:16px 18px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;color:#78895c;">
        Message
      </p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:#173426;white-space:pre-wrap;">${message}</p>
    </div>
    <p style="margin:20px 0 0;font-size:12px;color:#93a478;">
      Reply directly to this email to respond to ${name}.
    </p>`;

  return {
    subject: `New enquiry from ${name} — Phytogenic website`,
    html: layout({
      preheader: `New website enquiry from ${name}`,
      heading: "New Website Enquiry",
      body,
    }),
    text: `New enquiry from the Phytogenic website.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };
}

export function customerConfirmationEmail({ name, message }: EnquiryDetails) {
  const body = `
    <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#4b573b;">
      Hi ${name},
    </p>
    <p style="margin:0 0 16px;font-size:14px;line-height:1.7;color:#4b573b;">
      Thank you for reaching out to <strong>Phytogenic Life Science</strong>. We've received your request
      and one of our team members will get back to you shortly.
    </p>
    <div style="background-color:#f6f7f4;border-radius:12px;padding:16px 18px;margin-bottom:16px;">
      <p style="margin:0 0 6px;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:0.5px;color:#78895c;">
        Your message
      </p>
      <p style="margin:0;font-size:14px;line-height:1.7;color:#173426;white-space:pre-wrap;">${message}</p>
    </div>
    <p style="margin:0;font-size:14px;line-height:1.7;color:#4b573b;">
      In the meantime, feel free to browse our
      <a href="${SITE_URL}/All" style="color:#2c6b4a;">full range of herbal extracts and natural actives</a>.
    </p>`;

  return {
    subject: "We've received your request — Phytogenic Life Science",
    html: layout({
      preheader: "We've received your request and will be in touch soon.",
      heading: "Your request has been received",
      body,
    }),
    text: `Hi ${name},\n\nThank you for reaching out to Phytogenic Life Science. We've received your request and one of our team members will get back to you shortly.\n\nYour message:\n${message}\n\n— Phytogenic Life Science`,
  };
}
