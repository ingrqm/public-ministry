import type { Meta, StoryFn } from '@storybook/react';

import type {
  BlockquoteProps,
  CodeProps,
  LargeProps,
  LeadProps,
  MutedProps,
  ParagraphProps,
  SmallProps,
  TitleProps,
} from '.';
import { Typography } from '.';

export default {
  title: 'components/ui/typography',
  component: Typography.Title,
} as Meta<TitleProps>;

const TitleTemplate: StoryFn<TitleProps> = (args) => <Typography.Title {...args} />;
TitleTemplate.argTypes = {
  level: {
    control: 'select',
    options: [1, 2, 3, 4],
  },
};

export const Title1 = TitleTemplate.bind({});
Title1.args = {
  children: 'This is an H1 Title',
  level: 1,
};

export const Title2 = TitleTemplate.bind({});
Title2.args = {
  children: 'This is an H2 Title',
  level: 2,
};

export const Title3 = TitleTemplate.bind({});
Title3.args = {
  children: 'This is an H3 Title',
  level: 3,
};

export const Title4 = TitleTemplate.bind({});
Title4.args = {
  children: 'This is an H4 Title',
  level: 4,
};

// Paragraph Story
const ParagraphTemplate: StoryFn<ParagraphProps> = (args) => <Typography.Paragraph {...args} />;
export const Paragraph = ParagraphTemplate.bind({});
Paragraph.args = {
  children: 'This is a paragraph. It contains text that forms a block of content.',
};

// Blockquote Story
const BlockquoteTemplate: StoryFn<BlockquoteProps> = (args) => <Typography.Blockquote {...args} />;
export const Blockquote = BlockquoteTemplate.bind({});
Blockquote.args = {
  children: 'This is a blockquote. It typically holds a quoted section of text.',
};

// Code Story
const CodeTemplate: StoryFn<CodeProps> = (args) => <Typography.Code {...args} />;
export const Code = CodeTemplate.bind({});
Code.args = {
  children: 'const a = "Code snippet";',
};

// Lead Story
const LeadTemplate: StoryFn<LeadProps> = (args) => <Typography.Lead {...args} />;
export const Lead = LeadTemplate.bind({});
Lead.args = {
  children: 'This is a lead paragraph, styled to stand out.',
};

// Large Text Story
const LargeTemplate: StoryFn<LargeProps> = (args) => <Typography.Large {...args} />;
export const Large = LargeTemplate.bind({});
Large.args = {
  children: 'This is large text.',
};

// Small Text Story
const SmallTemplate: StoryFn<SmallProps> = (args) => <Typography.Small {...args} />;
export const Small = SmallTemplate.bind({});
Small.args = {
  children: 'This is small text.',
};

// Muted Text Story
const MutedTemplate: StoryFn<MutedProps> = (args) => <Typography.Muted {...args} />;
export const Muted = MutedTemplate.bind({});
Muted.args = {
  children: 'This is muted text.',
};
