import { ReactNode } from 'react';

import { Inter as FontSans } from 'next/font/google';

import { Body, Container, Head, Hr, Html, Img, Link, Tailwind, Text } from '@react-email/components';

import type { TranslateFunction } from '@/i18n';

import { cn } from '@/utils';

import { supportMail, url } from './template.data';
import { style } from './template.styles';

type PasswordRemindProps = {
  t: TranslateFunction;
  children: ReactNode;
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const Template = ({ t, children }: PasswordRemindProps) => {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Body className={cn('bg-white my-auto mx-auto font-sans', fontSans.variable)}>
          <Container className="border border-solid border-[#e4e4e7] rounded my-[48px] mx-auto p-[48px] w-[548px] text-center">
            <Img
              src={`${url}/assets/logo-white.png`}
              className="mx-auto block dark:hidden"
              width="101"
              height="94"
              alt={t('template.image.logo.alt')}
            />
            <Text className={style.h3}>{t('template.header.brand')}</Text>
            {children}
            <Hr className={style.separator} />
            <Text className={style.small}>{t('template.content.generated')}</Text>
            <Hr className={style.separator} />
            <Img
              src={`${url}/assets/envelope-white.png`}
              className="mx-auto mb-[8px] block dark:hidden"
              width="24"
              height="24"
              alt={t('template.image.envelope.alt')}
            />
            <Link className={style.small} href={`mailto:${supportMail}`}>
              {supportMail}
            </Link>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};
