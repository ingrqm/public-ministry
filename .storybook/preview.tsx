import React from 'react';

import type { Preview } from '@storybook/react';

import '@/styles/global.css';

import { ToastProvider } from '../src/providers';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <ToastProvider />
      </>
    ),
  ],
};

export default preview;
