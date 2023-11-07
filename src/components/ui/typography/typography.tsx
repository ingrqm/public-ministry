import type { ReactNode } from 'react';

export type TitleProps = {
  children: ReactNode;
  level: 1 | 2 | 3 | 4;
};

const Title = ({ children, level = 1 }: TitleProps) => {
  switch (level) {
    case 1:
      return <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">{children}</h1>;
    case 2:
      return <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">{children}</h2>;
    case 3:
      return <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{children}</h3>;
    case 4:
      return <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{children}</h4>;
    default:
      return null;
  }
};

export type ParagraphProps = {
  children: ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>;

export type BlockquoteProps = {
  children: ReactNode;
};

const Blockquote = ({ children }: BlockquoteProps) => (
  <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
);

export type CodeProps = {
  children: ReactNode;
};

const Code = ({ children }: CodeProps) => (
  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">{children}</code>
);

export type LeadProps = {
  children: ReactNode;
};

const Lead = ({ children }: LeadProps) => <p className="text-xl text-muted-foreground">{children}</p>;

export type LargeProps = {
  children: ReactNode;
};

const Large = ({ children }: LargeProps) => <div className="text-lg font-semibold">{children}</div>;

export type SmallProps = {
  children: ReactNode;
};

const Small = ({ children }: SmallProps) => <small className="text-sm font-medium leading-none">{children}</small>;

export type MutedProps = {
  children: ReactNode;
};

const Muted = ({ children }: MutedProps) => <p className="text-sm text-muted-foreground">{children}</p>;

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
