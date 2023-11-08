import type { Meta, StoryFn } from '@storybook/react';

import { Badge, type BadgeProps } from '.';

export default {
  title: 'components/ui/badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} as Meta;

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Badge',
  variant: 'default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Badge',
  variant: 'secondary',
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Destructive Badge',
  variant: 'destructive',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Badge',
  variant: 'outline',
};
