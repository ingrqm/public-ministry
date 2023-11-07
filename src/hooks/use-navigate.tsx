'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import { defaultLocale } from '@/i18n';

export const useNavigate = () => {
  const locale = useLocale();
  const router = useRouter();

  return (route: string) => {
    if (locale !== defaultLocale) {
      router.push(`/${locale}${route}`);
    } else {
      router.push(route);
    }
  };
};
