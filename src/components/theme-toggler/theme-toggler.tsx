'use client';

import { useTheme } from 'next-themes';

import { MoonIcon } from '@radix-ui/react-icons';
import { Sun } from 'lucide-react';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui';

export const ThemeToggler = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="dark:bg-zinc-900">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Motyw</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setTheme('light')}>Jasny</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>Ciemny</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>Systemowy</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
