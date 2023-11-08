'use client';

import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ElementRef } from 'react';

import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/utils';

const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, children, orientation = 'horizontal', decorative = true, ...props }, ref) => (
  <div className="flex justify-center items-center relative w-full h-full">
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'shrink-0 bg-border absolute',
        orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
        className,
      )}
      {...props}
    />
    {children && (
      <div className="bg-white dark:bg-zinc-900 z-[1] px-2 flex justify-center items-center">{children}</div>
    )}
  </div>
));
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
