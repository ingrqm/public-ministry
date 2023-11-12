import { getTranslator } from 'next-intl/server';

import { Link, Text } from '@react-email/components';

import type { Locale } from '@/i18n';

import { Template, style } from './components';

type AccessDeniedProps = {
  locale: Locale;
  name: string;
};

export const AccessDeniedEmail = async ({ locale, name }: AccessDeniedProps) => {
  const t = await getTranslator(locale, 'mail');

  return (
    <Template t={t}>
      <Text className={style.h4}>{t('access-denied.header.title')}</Text>
      <Text className={style.p}>{t('access-denied.content.welcome', { name })}</Text>
      <Text className={style.p}>{t('access-denied.content.denied')}</Text>
      <Text className={style.p}>{t('access-denied.content.contact-us')}</Text>
    </Template>
  );
};
