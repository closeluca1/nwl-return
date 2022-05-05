import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a29d375a868822",
    pass: "6076e226aeccf8"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'Patrick Lucas <contatopatricklucas@gmail.com>',
      subject,
      html: body,
    });
  };
};