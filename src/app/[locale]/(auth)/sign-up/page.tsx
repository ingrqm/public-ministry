import { useLocale } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { api } from '@/api';

import type { Locale } from '@/i18n';

import { SignUpForm } from '@/forms';

import { Link } from '@/components';
import { Typography } from '@/components/ui';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.auth.sign-up');

  return {
    title: t('meta.title'),
  };
}

export default async function SignUp() {
  const t = await getTranslator(useLocale(), 'page.auth.sign-up.body');

  const congregations = await api.congregations.list();

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <SignUpForm congregations={congregations} />
      <Typography.Small className="mt-6">
        {t('have-account')}{' '}
        <Link href="/sign-in">
          <span className="underline">{t('sign-in')}</span>
        </Link>
      </Typography.Small>
    </div>
  );
}
