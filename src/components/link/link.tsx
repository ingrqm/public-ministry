import type { ReactNode } from 'react';

import { useLocale } from 'next-intl';
import NextLink, { type LinkProps as NextLinkProps } from 'next/link';

import { defaultLocale } from '@/i18n';

type LinkProps = NextLinkProps & {
  children: ReactNode;
};

export const Link = ({ children, href, ...rest }: LinkProps) => {
  const locale = useLocale();

  const localePath = locale === defaultLocale ? '' : `/${locale}`;

  return (
    <NextLink href={`${localePath}${href}`} {...rest}>
      {children}
    </NextLink>
  );
};
