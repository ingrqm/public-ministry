import type { Meta, StoryFn } from '@storybook/react';

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '.';

export default {
  title: 'components/ui/card',
  component: Card,
} as Meta;

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card Content</p>
    </CardContent>
    <CardFooter>
      <p>Card Footer</p>
    </CardFooter>
  </Card>
);

export const Default = Template.bind({});
Default.args = {};
