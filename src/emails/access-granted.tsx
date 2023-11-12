import { getTranslator } from 'next-intl/server';

import { Link, Text } from '@react-email/components';

import type { Locale } from '@/i18n';

import { Template, style, url } from './components';

type AccessGrantedProps = {
  locale: Locale;
  name: string;
};

export const AccessGrantedEmail = async ({ locale, name }: AccessGrantedProps) => {
  const t = await getTranslator(locale, 'mail');

  const signInUrl = `${url}/sign-in`;

  return (
    <Template t={t}>
      <Text className={style.h4}>{t('access-granted.header.title')}</Text>
      <Text className={style.p}>{t('access-granted.content.welcome', { name })}</Text>
      <Text className={style.p}>
        {t('access-granted.content.granted')}
        <br />
        {t('access-granted.content.sign-in')}
      </Text>
      <Text className={style.p}>{t('access-granted.content.click-button')}</Text>
      <Link className={style.button} href={signInUrl}>
        {t('access-granted.button.sign-in')}
      </Link>
      <Text className={style.p}>{t('access-granted.content.copy-to-url')}</Text>
      <Link className={style.link} href={signInUrl}>
        {signInUrl}
      </Link>
    </Template>
  );
};
