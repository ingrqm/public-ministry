import type { Meta, StoryFn } from '@storybook/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '.';

export default {
  title: 'components/ui/tabs',
  component: Tabs,
} as Meta;

const Template: StoryFn<typeof Tabs> = (args) => (
  <Tabs defaultValue="tab1" {...args}>
    <TabsList aria-label="Manage your account settings">
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      <TabsTrigger value="tab3">Tab 3</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">
      <div className="p-4">Content 1</div>
    </TabsContent>
    <TabsContent value="tab2">
      <div className="p-4">Content 2</div>
    </TabsContent>
    <TabsContent value="tab3">
      <div className="p-4">Content 3</div>
    </TabsContent>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {};
