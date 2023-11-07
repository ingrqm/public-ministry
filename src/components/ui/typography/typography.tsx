import type { ReactNode } from 'react';

import { cn } from '@/utils';

export type TitleProps = {
  children: ReactNode;
  level: 1 | 2 | 3 | 4;
  className?: string;
};

const Title = ({ children, level = 1, className }: TitleProps) => {
  switch (level) {
    case 1:
      return (
        <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}>{children}</h1>
      );
    case 2:
      return (
        <h2 className={cn('scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0', className)}>
          {children}
        </h2>
      );
    case 3:
      return <h3 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}>{children}</h3>;
    case 4:
      return <h4 className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}>{children}</h4>;
    default:
      return null;
  }
};

export type ParagraphProps = {
  children: ReactNode;
  className?: string;
};

const Paragraph = ({ children, className }: ParagraphProps) => <p className={cn('leading-7', className)}>{children}</p>;

export type BlockquoteProps = {
  children: ReactNode;
  className?: string;
};

const Blockquote = ({ children, className }: BlockquoteProps) => (
  <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>
);

export type CodeProps = {
  children: ReactNode;
  className?: string;
};

const Code = ({ children, className }: CodeProps) => (
  <code className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold', className)}>
    {children}
  </code>
);

export type LeadProps = {
  children: ReactNode;
  className?: string;
};

const Lead = ({ children, className }: LeadProps) => (
  <p className={cn('text-xl text-muted-foreground', className)}>{children}</p>
);

export type LargeProps = {
  children: ReactNode;
  className?: string;
};

const Large = ({ children, className }: LargeProps) => (
  <div className={cn('text-lg font-semibold', className)}>{children}</div>
);

export type SmallProps = {
  children: ReactNode;
  className?: string;
};

const Small = ({ children, className }: SmallProps) => (
  <small className={cn('text-sm font-medium leading-none', className)}>{children}</small>
);

export type MutedProps = {
  children: ReactNode;
  className?: string;
};

const Muted = ({ children, className }: MutedProps) => (
  <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
);

export const Typography = {
  Title,
  Paragraph,
  Blockquote,
  Code,
  Lead,
  Large,
  Small,
  Muted,
};
