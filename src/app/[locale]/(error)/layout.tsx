'use client';

import { useState, type ReactNode, useEffect } from 'react';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { Typography } from '@/components/ui/typography';

import { useIsMobile } from '@/hooks';

import LogoImage from '@/assets/images/logo.png';

type LayoutProps = {
  children: ReactNode;
};

const files = ['not-found', 'not-authorized', 'not-working'];

export default function Layout({ children }: LayoutProps) {
  const currentPathname = usePathname();
  const [pathname, setPathname] = useState(currentPathname);
  const [isRouteChange, setIsRouteChange] = useState(false);
  const isMobile = useIsMobile();

  const filename = pathname.split('/').pop();
  const key = files.find((file) => file === filename) ?? 'not-found';

  const tLayout = useTranslations('layout.error');
  const tPage = useTranslations(`page.error.${key}`);

  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: isRouteChange || isMobile ? 0 : 0.9,
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    if (pathname !== currentPathname) {
      setPathname(currentPathname);
      setIsRouteChange(true);
    }
  }, [currentPathname, pathname]);

  return (
    <div className="flex min-h-screen">
      <motion.div
        className="hidden md:flex fixed top-0 left-0 min-h-screen bg-primary text-primary-foreground items-center justify-center flex-col gap-6"
        initial={{ width: '100%' }}
        animate={{ width: '50%' }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Image src={LogoImage} alt={tLayout('logo.alt')} priority />
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Typography.Title level={3}>{tLayout('title')}</Typography.Title>
        </motion.div>
        <motion.div key={`${pathname}-heading`} initial="hidden" animate="visible" variants={variants}>
          {filename !== null && <Typography.Title level={4}>{tPage('header.title')}</Typography.Title>}
        </motion.div>
      </motion.div>
      <motion.div
        key={`${pathname}-content`}
        className="w-full md:w-1/2 ml-auto flex items-center justify-center flex-col"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
}
