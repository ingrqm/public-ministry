import { getTranslator, redirect } from 'next-intl/server';

import { api } from '@/api';

import type { Locale } from '@/i18n';

import { PasswordRecoveryForm } from '@/forms';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.auth.password-recovery');

  return {
    title: t('meta.title'),
  };
}

type PasswordRecoveryProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function PasswordRecovery({ searchParams }: PasswordRecoveryProps) {
  const { token } = searchParams;

  const isTokenInvalid =
    token === undefined || typeof token !== 'string' || !(await api.passwordReset.isTokenValid({ token }));

  if (isTokenInvalid) {
    redirect('/sign-in');
  }

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <PasswordRecoveryForm token={token} />
    </div>
  );
}
