import express from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

export const routes = express.Router()

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a29d375a868822",
    pass: "6076e226aeccf8"
  }
});

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;
  
  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  });

  await transport.sendMail({
    from: 'Equipe feedget <oi@feedget.com>',
    to: 'Patrick Lucas <contatopatricklucas@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<p>tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`
    ].join()
  });

  return res.status(201).json({ data: feedback });
});
