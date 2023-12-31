'use client';

import { useState, useEffect, type ReactNode } from 'react';

import { useTranslations } from 'next-intl';
import { useSelectedLayoutSegment } from 'next/navigation';

import { motion } from 'framer-motion';

import { useIsMobile } from '@/hooks';

import { ThemeToggler } from '@/components';
import { Typography } from '@/components/ui';

import { LogoIcon } from '@/assets/icons';

type LayoutProps = {
  children: ReactNode;
};

const files = ['not-found', 'not-authorized', 'not-working'];

export default function Layout({ children }: LayoutProps) {
  const segment = useSelectedLayoutSegment();
  const [previousSegment, setPreviousSegment] = useState(segment);
  const [isRouteChange, setIsRouteChange] = useState(false);
  const isMobile = useIsMobile();

  const key = files.find((file) => file === segment) ?? 'not-found';

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
    if (segment !== previousSegment) {
      setPreviousSegment(segment);
      setIsRouteChange(true);
    }
  }, [segment, previousSegment]);

  return (
    <div className="flex min-h-screen">
      <motion.div
        className="hidden md:flex fixed top-0 left-0 min-h-screen bg-zinc-950 text-white items-center justify-center flex-col gap-6"
        initial={{ width: '100%' }}
        animate={{ width: '50%' }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <LogoIcon size={100} />
        <motion.div initial="hidden" animate="visible" variants={variants}>
          <Typography.Title level={3}>{tLayout('title')}</Typography.Title>
        </motion.div>
        <motion.div key={`${segment}-heading`} initial="hidden" animate="visible" variants={variants}>
          {segment !== null && <Typography.Title level={4}>{tPage('header.title')}</Typography.Title>}
        </motion.div>
      </motion.div>
      <div className="w-full dark:bg-zinc-900 l md:w-1/2 ml-auto flex items-center justify-center flex-col py-10">
        <motion.div className="absolute top-4 right-4" initial="hidden" animate="visible" variants={variants}>
          <ThemeToggler />
        </motion.div>

        <motion.div key={`${segment}-content`} initial="hidden" animate="visible" variants={variants}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
