import { useState } from 'react';

import type { Meta, StoryFn } from '@storybook/react';

import { Input, InputProps } from '.';

export default {
  title: 'components/ui/input',
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  placeholder: 'Type something...',
  type: 'text',
};

export const Password = Template.bind({});
Password.args = {
  disabled: false,
  placeholder: 'Enter your password',
  type: 'password',
};

export const File = Template.bind({});
File.args = {
  disabled: false,
  type: 'file',
};

export const Email = Template.bind({});
Email.args = {
  disabled: false,
  placeholder: 'name@example.com',
  type: 'email',
};

export const Number = Template.bind({});
Number.args = {
  disabled: false,
  placeholder: 'Enter a number',
  type: 'number',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Disabled input',
  type: 'text',
};

export const WithValue = Template.bind({});
WithValue.args = {
  disabled: false,
  placeholder: 'Type something...',
  type: 'text',
  defaultValue: 'This input has a value...',
};
