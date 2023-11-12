import { getFormatter, getTranslator } from 'next-intl/server';

import { Text } from '@react-email/components';
import { UAParser } from 'ua-parser-js';

import type { Locale } from '@/i18n';

import { Template, style } from './components';

type AccountDeletedProps = {
  locale: Locale;
  name: string;
  ua: string | undefined;
  ipAddress: string | undefined;
};

export const AccountDeletedEmail = async ({ locale, name, ua, ipAddress }: AccountDeletedProps) => {
  const t = await getTranslator(locale, 'mail');
  const formatter = await getFormatter(locale);
  const { browser, os } = UAParser(ua);

  const date = formatter.dateTime(new Date(), {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <Template t={t}>
      <Text className={style.h4}>{t('account-deleted.header.title')}</Text>
      <Text className={style.p}>{t('account-deleted.content.welcome', { name })}</Text>
      <Text className={style.p}>{t('account-deleted.content.account-deleted')}</Text>
      <Text className={style.p}>
        {t('account-deleted.content.date', { date })}
        <br />
        {t('account-deleted.content.ip-address', { ipAddress })}
      </Text>
      <Text className={style.p}>
        {t('account-deleted.content.browser', { browser: browser.name })}
        <br />
        {t('account-deleted.content.version', { version: browser.version })}
      </Text>
      <Text className={style.p}>
        {t('account-deleted.content.system', { system: os.name })}
        <br />
        {t('account-deleted.content.version', { version: os.version })}
      </Text>
      <Text className={style.p}>{t('account-deleted.content.not-fully-correspond')}</Text>
      <Text className={style.p}>{t('account-deleted.content.contact-us')}</Text>
    </Template>
  );
};
