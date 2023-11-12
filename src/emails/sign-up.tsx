import { getTranslator } from 'next-intl/server';

import { Link, Text } from '@react-email/components';

import type { Locale } from '@/i18n';

import { Template, style, url } from './components';

type SignUpProps = {
  locale: Locale;
  name: string;
  token: string;
};

export const SignUpEmail = async ({ locale, name, token }: SignUpProps) => {
  const t = await getTranslator(locale, 'mail');

  const accountActivationUrl = `${url}/sign-in?token=${token}`;

  return (
    <Template t={t}>
      <Text className={style.h4}>{t('sign-up.header.title')}</Text>
      <Text className={style.p}>{t('sign-up.content.welcome', { name })}</Text>
      <Text className={style.p}>{t('sign-up.content.account-created')}</Text>
      <Text className={style.p}>
        {t('sign-up.content.active-account')}
        <br />
        {t('sign-up.content.click-button')}
      </Text>
      <Link className={style.button} href={accountActivationUrl}>
        {t('sign-up.button.active-account')}
      </Link>
      <Text className={style.p}>{t('sign-up.content.copy-to-url')}</Text>
      <Link className={style.link} href={accountActivationUrl}>
        {accountActivationUrl}
      </Link>
      <Text className={style.p}>{t('sign-up.content.account-safe')}</Text>
    </Template>
  );
};
