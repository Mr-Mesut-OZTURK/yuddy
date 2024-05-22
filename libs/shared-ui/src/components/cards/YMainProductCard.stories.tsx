// src/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { YMainProductCard } from './YMainProductCard';

export default {
  title: 'components/cards/YMainProductCard',
  component: YMainProductCard,
} as Meta;

const Template: StoryFn = (args) => <YMainProductCard {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  // children: 'Click Me',
  // onClick: () => alert('Button clicked!'),
};
