"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT) || 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }
    async sendMail({ to, subject, text, html }) {
        try {
            const info = await this.transporter.sendMail({
                from: process.env.EMAIL_FROM,
                to,
                subject,
                text,
                html,
            });
            console.log('✉️ Email sent: %s', info.messageId);
            return info;
        }
        catch (error) {
            console.error('❌ Error sending email:', error);
            // We don't throw error here to prevent blocking main logic (like registration)
            return null;
        }
    }
    async sendWelcomeEmail(to, name) {
        const subject = 'Welcome to PetStation! 🐾';
        const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; padding: 20px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #f97316; margin: 0;">PetStation</h1>
          <p style="color: #64748b;">Your pet's best friend</p>
        </div>
        <div style="background-color: #fdf2f8; padding: 30px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
          <h2 style="color: #0f172a;">Welcome, ${name}!</h2>
          <p style="color: #334155; font-size: 16px; line-height: 1.6;">
            We're so excited to have you and your furry friends in our family. 
            PetStation is here to help you manage health records, medications, 
            and feeding schedules all in one place.
          </p>
          <div style="margin-top: 25px;">
            <a href="${process.env.FRONTEND_URL || 'http://localhost:8080'}/dashboard" 
               style="background-color: #f97316; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
              Go to Dashboard
            </a>
          </div>
        </div>
        <div style="color: #64748b; font-size: 14px; text-align: center;">
          <p>Next steps: Add your first pet to start tracking their health!</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p>© 2026 PetStation. All rights reserved.</p>
        </div>
      </div>
    `;
        return this.sendMail({ to, subject, html });
    }
}
exports.mailService = new MailService();
//# sourceMappingURL=mail.service.js.map