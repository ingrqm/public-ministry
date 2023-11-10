import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import type { Locale } from '@/i18n';

import { SignInForm } from '@/forms';

import { Link } from '@/components';
import { Typography } from '@/components/ui';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.auth.sign-in');

  return {
    title: t('meta.title'),
  };
}

export default function SignIn() {
  const t = useTranslations('page.auth.sign-in.body');

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <SignInForm />
      <Typography.Small className="mt-6">
        {t('no-account')}{' '}
        <Link href="/sign-up">
          <span className="underline">{t('sign-up')}</span>
        </Link>
      </Typography.Small>
    </div>
  );
}
