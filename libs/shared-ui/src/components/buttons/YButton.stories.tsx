// src/Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { YButton } from './YButton';

export default {
  title: 'components/buttons/YButton',
  component: YButton,
} as Meta;

const Template: StoryFn = (args) => <YButton {...args} />;

export const Playground = Template.bind({});

Playground.args = {
  children: 'Click Me',
  onClick: () => alert('Button clicked!'),
};
