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
  defaultChecked: false,
};

export const Checked = Template.bind({});
Checked.args = {
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
