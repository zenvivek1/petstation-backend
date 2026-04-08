interface MailOptions {
    to: string;
    subject: string;
    text?: string;
    html: string;
}
declare class MailService {
    private transporter;
    constructor();
    sendMail({ to, subject, text, html }: MailOptions): Promise<any>;
    sendWelcomeEmail(to: string, name: string): Promise<any>;
}
export declare const mailService: MailService;
export {};
//# sourceMappingURL=mail.service.d.ts.map