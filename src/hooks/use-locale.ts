import { useLocale as useLocaleRaw } from 'next-intl';

import { Locale } from '@/i18n';

export const useLocale = () => useLocaleRaw() as Locale;
