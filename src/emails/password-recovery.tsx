import { getFormatter, getTranslator } from 'next-intl/server';

import { Text } from '@react-email/components';
import { UAParser } from 'ua-parser-js';

import type { Locale } from '@/i18n';

import { Template, style } from './components';

type PasswordRecoveryProps = {
  locale: Locale;
  name: string;
  ua: string | undefined;
  ipAddress: string | undefined;
};

export const PasswordRecoveryEmail = async ({ locale, name, ua, ipAddress }: PasswordRecoveryProps) => {
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
      <Text className={style.h4}>{t('password-recovery.header.title')}</Text>
      <Text className={style.p}>{t('password-recovery.content.welcome', { name })}</Text>
      <Text className={style.p}>{t('password-recovery.content.password-was-change')}</Text>
      <Text className={style.p}>
        {t('password-recovery.content.date', { date })}
        <br />
        {t('password-recovery.content.ip-address', { ipAddress })}
      </Text>
      <Text className={style.p}>
        {t('password-recovery.content.browser', { browser: browser.name })}
        <br />
        {t('password-recovery.content.version', { version: browser.version })}
      </Text>
      <Text className={style.p}>
        {t('password-recovery.content.system', { system: os.name })}
        <br />
        {t('password-recovery.content.version', { version: os.version })}
      </Text>
      <Text className={style.p}>{t('password-recovery.content.not-fully-correspond')}</Text>
      <Text className={style.p}>{t('password-recovery.content.not-safe')}</Text>
    </Template>
  );
};
