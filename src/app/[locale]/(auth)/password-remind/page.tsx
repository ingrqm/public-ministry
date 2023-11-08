import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import type { Locale } from '@/i18n';

import { PasswordRemindForm } from '@/forms';

import { Link } from '@/components';
import { Typography } from '@/components/ui';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.auth.password-remind');

  return {
    title: t('meta.title'),
  };
}

export default function PasswordRemind() {
  const t = useTranslations('page.auth.password-remind.body');

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <PasswordRemindForm />
      <Typography.Small className="mt-6">
        {t('remember-password')}{' '}
        <Link href="/sign-in">
          <span className="underline">{t('sign-in')}</span>
        </Link>
      </Typography.Small>
    </div>
  );
}
