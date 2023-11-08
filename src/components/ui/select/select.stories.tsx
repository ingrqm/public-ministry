import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '.';

export default {
  title: 'components/ui/select',
  component: Select,
  argTypes: {
    value: {
      control: 'select',
      options: ['option1', 'option2', 'option3', 'option4'],
    },
  },
} as Meta;

const Template: StoryFn<typeof Select> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <Select {...args} value={value} onValueChange={setValue}>
      <SelectTrigger aria-haspopup="listbox">
        <SelectValue placeholder="Select an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel id="group-label">Options</SelectLabel>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
          <SelectItem value="option3" disabled>
            Option 3 (Disabled)
          </SelectItem>
          <SelectSeparator />
          <SelectLabel id="group-label-2">More Options</SelectLabel>
          <SelectItem value="option4">Option 4</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export const Default = Template.bind({});
Default.args = {
  value: undefined,
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 'option2',
};
