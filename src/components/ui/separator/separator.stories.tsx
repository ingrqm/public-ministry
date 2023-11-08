import type { Meta, StoryFn } from '@storybook/react';

import { Separator } from '.';

export default {
  title: 'components/ui/separator',
  component: Separator,
} as Meta;

const Template: StoryFn<typeof Separator> = (args) => (
  <div className="w-full h-20">
    <Separator {...args} />
  </div>
);

export const Horizontal = Template.bind({});
Horizontal.args = {
  orientation: 'horizontal',
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
};

export const HorizontalWithText = Template.bind({});
HorizontalWithText.args = {
  orientation: 'horizontal',
  children: 'some text',
};

export const VerticalWithText = Template.bind({});
VerticalWithText.args = {
  orientation: 'vertical',
  children: 'some text',
};
