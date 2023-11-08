import type { Meta, StoryFn } from '@storybook/react';

import { Checkbox } from '.';

export default {
  title: 'components/ui/checkbox',
  component: Checkbox,
} as Meta;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <form>
    <label>
      <Checkbox {...args} />
      <span className="ml-2 select-none">Agree to terms and conditions</span>
    </label>
  </form>
);

export const Unchecked = Template.bind({});
Unchecked.args = {
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};
