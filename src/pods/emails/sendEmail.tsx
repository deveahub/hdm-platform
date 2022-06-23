import nodemailer from 'nodemailer';
import { ComponentProps } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import templates from './templates';

const sendEmail = <Name extends keyof typeof templates>(
  name: Name,
  variables: ComponentProps<typeof templates[Name][0]>,
  to: string
) =>
  new Promise((res, rej) => {
    const [EmailComponent, getTitle] = templates[name];
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // TODO: Include this data in env file
        user: 'hdm.eventos.notificaciones@gmail.com',
        pass: 'qoucasqroaifnroh',
      },
    });

    const mailOptions = {
      from: 'hdm.eventos.notificaciones@gmail.com',
      to,
      subject: `Eventos Herederos De Montoya - ${getTitle(variables as any)}`,
      html: renderToStaticMarkup(<EmailComponent {...(variables as any)} />),
    };

    transporter.sendMail(mailOptions, (error) => {
      res(!error);
    });
  });

export default sendEmail;
