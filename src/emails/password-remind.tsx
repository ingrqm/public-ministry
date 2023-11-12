import { getTranslator } from 'next-intl/server';

import { Link, Text } from '@react-email/components';
import { UAParser } from 'ua-parser-js';

import type { Locale } from '@/i18n';

import { Template, style, url } from './components';

type PasswordRemindProps = {
  locale: Locale;
  name: string;
  token: string;
  ua: string | undefined;
  ipAddress: string | undefined;
};

export const PasswordRemindEmail = async ({ locale, name, ua, ipAddress, token }: PasswordRemindProps) => {
  const t = await getTranslator(locale, 'mail');
  const { browser } = UAParser(ua);

  const passwordRecoveryUrl = `${url}/password-recovery?token=${token}`;

  return (
    <Template t={t}>
      <Text className={style.h4}>{t('password-remind.header.title')}</Text>
      <Text className={style.p}>{t('password-remind.content.welcome', { name })}</Text>
      <Text className={style.p}>
        {t('password-remind.content.request-was-send')}
        {Boolean(browser.name) &&
          Boolean(ipAddress) &&
          ` ${t('password-remind.content.request-from', { browser: browser.name, ipAddress })}`}{' '}
        {t('password-remind.content.follow-instructions')}
      </Text>
      <Text className={style.p}>
        {t('password-remind.content.fill-form')}
        <br />
        {t('password-remind.content.click-button')}
      </Text>
      <Link className={style.button} href={passwordRecoveryUrl}>
        {t('password-remind.button.change-password')}
      </Link>
      <Text className={style.p}>{t('password-remind.content.copy-to-url')}</Text>
      <Link className={style.link} href={passwordRecoveryUrl}>
        {passwordRecoveryUrl}
      </Link>
      <Text className={style.p}>{t('password-remind.content.account-safe')}</Text>
    </Template>
  );
};
