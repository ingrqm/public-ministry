import { ComponentProps } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Checkbox } from '@/components/ui';

import { Label } from '.';

export default {
  title: 'components/ui/label',
  component: Label,
} as Meta;

type LabelProps = ComponentProps<typeof Label> & { disabled?: boolean };

const Template: StoryFn<LabelProps> = (args) => (
  <>
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id={args.htmlFor} disabled={args.disabled} />
        <Label htmlFor={args.htmlFor}>{args.children}</Label>
      </div>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Label Text',
  htmlFor: 'example-input',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Label Text',
  htmlFor: 'example-input-disabled',
  disabled: true,
};
