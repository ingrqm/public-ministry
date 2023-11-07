import { useLocale } from 'next-intl';
import { redirect } from 'next/navigation';

import { defaultLocale } from '@/i18n';

export const useRedirect = () => {
  const locale = useLocale();

  return (route: string) => {
    if (locale !== defaultLocale) {
      redirect(`/${locale}${route}`);
    } else {
      redirect(route);
    }
  };
};
