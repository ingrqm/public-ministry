import type { ReactElement } from 'react';

import { getTranslator } from 'next-intl/server';

import { render } from '@react-email/components';
import nodemailer from 'nodemailer';

import type { Locale } from './i18n';

type SendEmailProps = {
  locale: Locale;
  to: string;
  key: string;
  html: ReactElement;
};

const smtpOptions = {
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
};

export const sendEmail = async ({ locale, to, html, key }: SendEmailProps) => {
  const t = await getTranslator(locale, 'mail');

  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    from: {
      address: process.env.SMTP_USER as string,
      name: t('sender'),
    },
    to,
    subject: t(`${key}.subject`),
    html: render(html),
  });
};
