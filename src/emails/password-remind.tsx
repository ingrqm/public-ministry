import { getTranslator } from 'next-intl/server';

import { Body, Container, Head, Hr, Html, Img, Link, Tailwind, Text } from '@react-email/components';
import { UAParser } from 'ua-parser-js';

import type { Locale } from '@/i18n';

type PasswordRemindProps = {
  locale: Locale;
  name: string;
  token: string;
  ua: string | undefined;
  ipAddress: string | undefined;
};

const domain = process.env.NEXT_PUBLIC_DOMAIN;
const url = `https://${domain}`;

const supportMail = `support@${domain}`;
const logoImageUrl = `${url}/assets/logo-white.png`;
const envelopeImageUrl = `${url}/assets/envelope-white.png`;

const style = {
  h3: 'font-semibold text-[24px] line-height-[32px] text-zinc-950',
  h4: 'font-semibold text-[20px] line-height-[28px] text-zinc-950',
  p: 'font-normal text-[16px] line-height-[28px] text-zinc-950',
  small: 'font-medium text-[14px] line-height-[17px] text-zinc-950',
  button:
    'text-[14px] line-height-[24px] font-medium rounded-[6px] bg-slate-900 text-white px-[16px] py-[8px] cursor-pointer',
  link: 'font-normal text-[16px] line-height-[28px] underline text-zinc-950 cursor-pointer',
  separator: 'bg-border h-[1px] w-full',
};

export const PasswordRemindEmail = async ({ locale, name, ua, ipAddress, token }: PasswordRemindProps) => {
  const t = await getTranslator(locale, 'mail.password-remind');

  const { browser } = UAParser(ua);
  const passwordRecoveryUrl = `${url}/password-recovery?token=${token}`;

  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#e4e4e7] rounded my-[48px] mx-auto p-[48px] w-[548px] text-center">
            <Img src={logoImageUrl} className="mx-auto" width="101" height="94" alt={t('image.logo.alt')} />
            <Text className={style.h3}>{t('header.brand')}</Text>
            <Text className={style.h4}>{t('header.title')}</Text>
            <Text className={style.p}>{t('content.welcome', { name })}</Text>
            <Text className={style.p}>
              {t('content.request-was-send')}
              {Boolean(browser.name) && Boolean(ipAddress) && ` ${t('content.request-from')}`}{' '}
              {t('content.follow-instructions')}
            </Text>
            <Text className={style.p}>{t('content.fill-form')}</Text>
            <Link className={style.button} href={passwordRecoveryUrl}>
              {t('button.change-password')}
            </Link>
            <Text className={style.p}>{t('content.copy-to-url')}</Text>
            <Link className={style.link} href={passwordRecoveryUrl}>
              {passwordRecoveryUrl}
            </Link>
            <Text className={style.p}>{t('content.accountSafe')}</Text>
            <Hr className={style.separator} />
            <Text className={style.small}>{t('content.generated')}</Text>
            <Hr className={style.separator} />
            <Img
              src={envelopeImageUrl}
              className="mx-auto mb-[8px]"
              width="24"
              height="24"
              alt={t('image.envelope.alt')}
            />
            <Link className={style.small} href={`mailto:${supportMail}`}>
              {supportMail}
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
