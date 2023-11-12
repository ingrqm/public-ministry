'use server';

import { headers } from 'next/headers';

import { sendEmail } from '@/smtp';

import type { Locale } from '@/i18n';
import { prisma } from '@/prisma';

import { PasswordRemindEmail } from '@/emails';

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
