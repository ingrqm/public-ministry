import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import type { Locale } from '@/i18n';

import { Link } from '@/components';
import { Button, Typography } from '@/components/ui';

import { NotAuthorizedIcon } from '@/assets/icons';

export const dynamic = 'force-dynamic';

type Props = {
  params: {
    locale: Locale;
  };
};

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslator(locale, 'page.error.not-authorized');

  return {
    title: t('meta.title'),
  };
}

export default function NotAuthorized() {
  const t = useTranslations('page.error.not-authorized');

  return (
    <div className="flex flex-col items-center">
      <NotAuthorizedIcon />
      <Typography.Title level={4} className="mt-9">
        {t('body.heading')}
      </Typography.Title>
      <Typography.Paragraph className="mt-2">{t('body.paragraph')}</Typography.Paragraph>
      <Link href={'/dashboard'}>
        <Button size="lg" className="mt-6">
          {t('body.link')}
        </Button>
      </Link>
    </div>
  );
}
