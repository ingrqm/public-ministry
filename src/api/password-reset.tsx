'use server';

import { headers } from 'next/headers';

import { sendEmail } from '@/smtp';

import type { Locale } from '@/i18n';
import { prisma } from '@/prisma';

import { PasswordRecoveryEmail, PasswordRemindEmail } from '@/emails';

import { getIpAddress, getUA, signJWT } from '@/utils';

type RequestProps = {
  locale: Locale;
  email: string;
};

export async function request({ email, locale }: RequestProps) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('user-not-exist');
  }

  const headersList = headers();

  const ua = getUA(headersList);
  const ipAddress = getIpAddress(headersList);

  const token = await signJWT();

  await prisma.user.update({ where: { email }, data: { passwordChangeToken: token } });

  const html = await PasswordRemindEmail({ locale, token, ua, ipAddress, name: `${user.name}` });

  await sendEmail({
    locale,
    to: email,
    key: 'password-remind',
    html,
  });
}

type IsTokenValidProps = {
  token: string;
};

export const isTokenValid = async ({ token }: IsTokenValidProps) => {
  try {
    const user = await prisma.user.findUnique({ where: { passwordChangeToken: token } });

    return Boolean(user);
  } catch (error) {
    return false;
  }
};

type ConfirmProps = {
  locale: Locale;
  token: string;
  password: string;
};

export const confirm = async ({ locale, token, password }: ConfirmProps) => {
  const user = await prisma.user.findUnique({ where: { passwordChangeToken: token } });

  if (!user) {
    throw new Error('invalid-token');
  }

  const headersList = headers();

  const ua = getUA(headersList);
  const ipAddress = getIpAddress(headersList);

  await prisma.user.update({ where: { passwordChangeToken: token }, data: { password, passwordChangeToken: null } });

  const html = await PasswordRecoveryEmail({ locale, ua, ipAddress, name: `${user.name}` });

  await sendEmail({
    locale,
    to: user.email,
    key: 'password-recovery',
    html,
  });
};
