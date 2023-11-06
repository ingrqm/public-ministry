import type { Locale } from '@/i18n';
import { getTranslator } from 'next-intl/server';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.auth.password-remind');

  return {
    title: t('meta.title'),
  };
}

export default function PasswordRemind() {
  return <div>password remind</div>;
}
