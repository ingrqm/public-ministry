'use client';

import { useState, useEffect, type ReactNode, useRef } from 'react';

import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import { motion } from 'framer-motion';

import { useIsMobile } from '@/hooks';

import { ThemeToggler } from '@/components';
import { Typography } from '@/components/ui';

import { LogoIcon } from '@/assets/icons';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const currentPathname = usePathname();
  const [pathname, setPathname] = useState(currentPathname);
  const [isRouteChange, setIsRouteChange] = useState(false);
  const isMobile = useIsMobile();

  const filename = pathname.split('/').pop();

  const tLayout = useTranslations('layout.auth');
  const tPage = useTranslations(`page.auth.${filename}`);

  const variants = {
    hidden: {
      opacity: 0,
    },
    hiddenWithSize: {
      opacity: 0,
      height: isRouteChange ? contentRef.current?.offsetHeight : 0,
    },
    hiddenWithProperSize: {
      opacity: 0,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        delay: isRouteChange || isMobile ? 0.5 : 0.9,
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
        <motion.div key={`${pathname}-heading`} initial="hidden" animate="visible" variants={variants}>
          {filename !== null && <Typography.Title level={4}>{tPage('header.title')}</Typography.Title>}
        </motion.div>
      </motion.div>
      <div className="w-full dark:bg-zinc-900 l md:w-1/2 ml-auto flex items-center justify-center flex-col">
        <motion.div className="absolute top-4 right-4" initial="hidden" animate="visible" variants={variants}>
          <ThemeToggler />
        </motion.div>

        <div className="flex md:hidden flex-col items-center justify-center">
          <LogoIcon size={100} />
          <motion.div initial="hidden" animate="visible" variants={variants}>
            <Typography.Title className="mt-6" level={3}>
              {tLayout('title')}
            </Typography.Title>
          </motion.div>
          <motion.div key={`${pathname}-heading`} initial="hidden" animate="visible" variants={variants}>
            {filename !== null && (
              <Typography.Title className="mt-6" level={4}>
                {tPage('header.title')}
              </Typography.Title>
            )}
          </motion.div>
        </div>

        <motion.div
          className="w-full px-10 max-w-[400px] mt-6"
          key={`${pathname}-content`}
          initial="hiddenWithSize"
          animate={['hiddenWithProperSize', 'visible']}
          exit="hiddenWithSize"
          variants={variants}
          ref={contentRef}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
