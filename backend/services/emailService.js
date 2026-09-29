const nodemailer = require('nodemailer');

class EmailService {
    constructor() {
        this.transporter = null;
        this.isTestAccount = false;
        this.initPromise = this.initializeTransporter();
    }

    async initializeTransporter() {
        try {
            // Option A: Custom SMTP or Gmail App Password configured in .env
            const emailUser = (process.env.EMAIL_USER || process.env.SMTP_USER || '').trim();
            const emailPass = (process.env.EMAIL_PASS || process.env.SMTP_PASS || '').replace(/\s+/g, '');

            if (emailUser && emailPass) {
                if (process.env.SMTP_HOST) {
                    this.transporter = nodemailer.createTransport({
                        host: process.env.SMTP_HOST,
                        port: Number(process.env.SMTP_PORT) || 587,
                        secure: Number(process.env.SMTP_PORT) === 465,
                        auth: {
                            user: emailUser,
                            pass: emailPass
                        }
                    });
                } else {
                    // Default to Gmail service
                    this.transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: emailUser,
                            pass: emailPass
                        }
                    });
                }
                console.log(`[EMAIL SERVICE] Connected to production SMTP as: ${emailUser}`);
                return;
            }

            // Option B: Automated Ethereal test inbox for development
            console.log('[EMAIL SERVICE] No SMTP credentials in .env. Initializing secure Ethereal test mailer...');
            const testAccount = await nodemailer.createTestAccount();
            this.transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass
                }
            });
            this.isTestAccount = true;
            console.log(`[EMAIL SERVICE] Ethereal mailer initialized for sandbox testing (${testAccount.user})`);
        } catch (err) {
            console.error('[EMAIL SERVICE] Failed to initialize mail transporter:', err.message);
        }
    }

    /**
     * Send 6-digit OTP verification email directly to user's real inbox
     * @param {string} toEmail - Candidate's email address
     * @param {string} otp - 6-digit one-time password
     * @param {string} name - Candidate's full name
     */
    async sendVerificationEmail(toEmail, otp, name = 'Candidate') {
        await this.initPromise;

        const senderAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER || '"Sarathi Placement Intelligence" <no-reply@sarathi.dev>';

        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #09090b; color: #f4f4f5; margin: 0; padding: 24px; }
    .card { max-width: 520px; margin: 0 auto; background: #141417; border: 1px solid #27272a; border-radius: 14px; overflow: hidden; }
    .header { background: #18181b; padding: 24px 32px; border-bottom: 1px solid #27272a; display: flex; align-items: center; gap: 12px; }
    .logo-badge { background: #10b981; color: #09090b; font-weight: 900; font-size: 16px; width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; }
    .brand-title { color: #ffffff; font-size: 18px; font-weight: 700; margin: 0; letter-spacing: -0.3px; }
    .body-content { padding: 32px; }
    .greeting { font-size: 16px; color: #e4e4e7; margin-top: 0; }
    .msg-text { font-size: 14px; line-height: 1.6; color: #a1a1aa; margin: 16px 0 24px 0; }
    .otp-box { background: #09090b; border: 1px dashed #3f3f46; border-radius: 10px; padding: 20px; text-align: center; margin: 24px 0; }
    .otp-code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #34d399; margin: 0; }
    .otp-expiry { font-size: 12px; color: #71717a; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .security-note { font-size: 12px; color: #71717a; line-height: 1.5; border-top: 1px solid #27272a; padding-top: 20px; margin-top: 24px; }
    .footer { background: #0e0e11; padding: 18px 32px; text-align: center; font-size: 11px; color: #52525b; border-top: 1px solid #1f1f23; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo-badge">S</div>
      <h2 class="brand-title">Sarathi Placement Platform</h2>
    </div>
    <div class="body-content">
      <h3 class="greeting">Hello ${name},</h3>
      <p class="msg-text">
        Thank you for registering on <strong>Sarathi</strong>. To verify your email address and activate your personal AI placement roadmap, please enter the one-time verification code below:
      </p>
      <div class="otp-box">
        <div class="otp-code">${otp}</div>
        <div class="otp-expiry">Valid for 15 minutes • Single Use Only</div>
      </div>
      <p class="msg-text">
        If you did not request this verification code, someone may have entered your email address by mistake. Please disregard this email — no action is required.
      </p>
      <div class="security-note">
        <strong>Security Tip:</strong> Sarathi engineers will never ask for your verification code. Keep this code confidential.
      </div>
    </div>
    <div class="footer">
      Automated verification dispatch • Sarathi Placement Intelligence • Do not reply directly to this email
    </div>
  </div>
</body>
</html>
        `;

        if (!this.transporter) {
            console.warn(`[EMAIL SERVICE] Transporter unavailable. Verification code for ${toEmail}: ${otp}`);
            return { success: false, reason: 'Transporter not ready' };
        }

        try {
            const mailOptions = {
                from: senderAddress,
                to: toEmail,
                subject: `Your Sarathi Email Verification Code: ${otp}`,
                text: `Hello ${name},\n\nYour Sarathi verification code is: ${otp}\n\nThis code expires in 15 minutes. Enter this code on the verification screen to activate your account.\n\nBest regards,\nSarathi Placement Platform`,
                html: htmlContent
            };

            const info = await this.transporter.sendMail(mailOptions);
            console.log(`[EMAIL SERVICE] ✓ Verification email successfully dispatched to: ${toEmail} (MessageId: ${info.messageId})`);

            let previewUrl = null;
            if (this.isTestAccount) {
                previewUrl = nodemailer.getTestMessageUrl(info);
                console.log(`[EMAIL SERVICE] 🌐 Ethereal Web Preview URL: ${previewUrl}`);
            }

            return {
                success: true,
                messageId: info.messageId,
                previewUrl
            };
        } catch (err) {
            console.error(`[EMAIL SERVICE] Failed to send email to ${toEmail}:`, err.message);
            return {
                success: false,
                error: err.message
            };
        }
    }

    /**
     * Send 6-digit Password Reset OTP email
     * @param {string} toEmail - Candidate's email address
     * @param {string} otp - 6-digit one-time password
     * @param {string} name - Candidate's name
     */
    async sendPasswordResetEmail(toEmail, otp, name = 'Candidate') {
        await this.initPromise;

        const senderAddress = process.env.EMAIL_FROM || process.env.EMAIL_USER || '"Sarathi Placement Security" <no-reply@sarathi.dev>';

        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #09090b; color: #f4f4f5; margin: 0; padding: 24px; }
    .card { max-width: 520px; margin: 0 auto; background: #141417; border: 1px solid #27272a; border-radius: 14px; overflow: hidden; }
    .header { background: #18181b; padding: 24px 32px; border-bottom: 1px solid #27272a; display: flex; align-items: center; gap: 12px; }
    .logo-badge { background: #38bdf8; color: #09090b; font-weight: 900; font-size: 16px; width: 32px; height: 32px; border-radius: 8px; display: inline-flex; align-items: center; justify-content: center; }
    .brand-title { color: #ffffff; font-size: 18px; font-weight: 700; margin: 0; letter-spacing: -0.3px; }
    .body-content { padding: 32px; }
    .greeting { font-size: 16px; color: #e4e4e7; margin-top: 0; }
    .msg-text { font-size: 14px; line-height: 1.6; color: #a1a1aa; margin: 16px 0 24px 0; }
    .otp-box { background: #09090b; border: 1px dashed #38bdf8; border-radius: 10px; padding: 20px; text-align: center; margin: 24px 0; }
    .otp-code { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 36px; font-weight: 800; letter-spacing: 8px; color: #38bdf8; margin: 0; }
    .otp-expiry { font-size: 12px; color: #71717a; margin-top: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
    .security-note { font-size: 12px; color: #ef4444; line-height: 1.5; border-top: 1px solid #27272a; padding-top: 20px; margin-top: 24px; }
    .footer { background: #0e0e11; padding: 18px 32px; text-align: center; font-size: 11px; color: #52525b; border-top: 1px solid #1f1f23; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <div class="logo-badge">🔑</div>
      <h2 class="brand-title">Sarathi Password Reset</h2>
    </div>
    <div class="body-content">
      <h3 class="greeting">Hello ${name},</h3>
      <p class="msg-text">
        We received a request to reset the password for your Sarathi account. Use the 6-digit verification code below to authorize this password change:
      </p>
      <div class="otp-box">
        <div class="otp-code">${otp}</div>
        <div class="otp-expiry">Expires in 15 minutes • Single Use Only</div>
      </div>
      <p class="msg-text">
        Enter this code in the password reset window along with your new password to restore access to your account.
      </p>
      <div class="security-note">
        <strong>Security Warning:</strong> If you did not request a password reset, someone else may be attempting to access your account. Your account is still secure — do not share this code with anyone.
      </div>
    </div>
    <div class="footer">
      Security notification • Sarathi Placement Intelligence • Do not reply directly to this email
    </div>
  </div>
</body>
</html>
        `;

        if (!this.transporter) {
            console.warn(`[EMAIL SERVICE] Transporter unavailable. Password reset code for ${toEmail}: ${otp}`);
            return { success: false, reason: 'Transporter not ready' };
        }

        try {
            const mailOptions = {
                from: senderAddress,
                to: toEmail,
                subject: `Your Sarathi Password Reset Code: ${otp}`,
                text: `Hello ${name},\n\nYour Sarathi password reset verification code is: ${otp}\n\nThis code expires in 15 minutes. Enter this code to set a new password for your account.\n\nIf you did not request this, please ignore this email.\n\nBest regards,\nSarathi Placement Platform`,
                html: htmlContent
            };

            const info = await this.transporter.sendMail(mailOptions);
            console.log(`[EMAIL SERVICE] ✓ Password reset email successfully dispatched to: ${toEmail} (MessageId: ${info.messageId})`);

            let previewUrl = null;
            if (this.isTestAccount) {
                previewUrl = nodemailer.getTestMessageUrl(info);
                console.log(`[EMAIL SERVICE] 🌐 Ethereal Web Preview URL: ${previewUrl}`);
            }

            return {
                success: true,
                messageId: info.messageId,
                previewUrl
            };
        } catch (err) {
            console.error(`[EMAIL SERVICE] Failed to send password reset email to ${toEmail}:`, err.message);
            return {
                success: false,
                error: err.message
            };
        }
    }
}

module.exports = new EmailService();
