import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import type { Locale } from '@/i18n';

import { SignInForm } from '@/forms';

import { Link } from '@/components';
import { Button, Separator, Typography } from '@/components/ui';

import { AppleIcon, GoogleIcon } from '@/assets/icons';

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
      <Separator>
        <Typography.Small>{t('continue-with')}</Typography.Small>
      </Separator>
      <div className="flex justify-center gap-8 py-5">
        <Button variant={'link'} size={'icon'}>
          <GoogleIcon />
        </Button>
        <Button variant={'link'} size={'icon'}>
          <AppleIcon />
        </Button>
      </div>
      <div className="mb-6 w-full">
        <Separator>
          <Typography.Small>{t('or')}</Typography.Small>
        </Separator>
      </div>
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
