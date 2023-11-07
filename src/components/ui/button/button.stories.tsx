import type { Meta, StoryFn } from '@storybook/react';
import { LayoutDashboardIcon } from 'lucide-react';

import { Button, type ButtonProps } from '.';

export default {
  title: 'components/ui/button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = ({ children, ...props }) => <Button {...props}>{children}</Button>;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Button',
  variant: 'default',
  size: 'default',
};

export const Destructive = Template.bind({});
Destructive.args = {
  children: 'Destructive Button',
  variant: 'destructive',
  size: 'default',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline Button',
  variant: 'outline',
  size: 'default',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary Button',
  variant: 'secondary',
  size: 'default',
};

export const Ghost = Template.bind({});
Ghost.args = {
  children: 'Ghost Button',
  variant: 'ghost',
  size: 'default',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Link Button',
  variant: 'link',
  size: 'default',
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  children: 'Small Button',
  variant: 'default',
  size: 'sm',
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  children: 'Large Button',
  variant: 'default',
  size: 'lg',
};

export const IconButton = Template.bind({});
IconButton.args = {
  children: <LayoutDashboardIcon />,
  variant: 'default',
  size: 'icon',
};
