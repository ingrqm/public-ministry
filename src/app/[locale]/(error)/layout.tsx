'use client';

import type { ReactNode } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Typography } from '@/components/ui/typography';

import LogoImage from '@/assets/images/logo.png';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  const filename = pathname.split('/').pop();

  const tLayout = useTranslations('layout.error');
  const tPage = useTranslations(`page.error.${filename}`);

  return (
    <div className="flex min-h-screen">
      <div className="hidden md:flex w-1/2 fixed top-0 left-0 min-h-screen bg-primary text-primary-foreground items-center justify-center flex-col gap-6">
        <Image src={LogoImage} alt={tLayout('logo.alt')} priority />
        <Typography.Title level={3}>{tLayout('title')}</Typography.Title>
        {filename !== null && <Typography.Title level={4}>{tPage('header.title')}</Typography.Title>}
      </div>
      <div className="w-full md:w-1/2 ml-auto flex items-center justify-center flex-col">{children}</div>
    </div>
  );
}
