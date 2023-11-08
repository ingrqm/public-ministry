import { zodResolver } from '@hookform/resolvers/zod';
import type { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Input, Button } from '@/components/ui';

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '.';

export default {
  title: 'components/ui/form',
  component: Form,
} as Meta;

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const Template: StoryFn<typeof Form> = (args) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="ingrqm" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export const Default = Template.bind({});
Default.args = {};
