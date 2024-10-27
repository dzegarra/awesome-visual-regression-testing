import { Meta, StoryObj } from '@storybook/react';
import { DobbleCard } from './DobbleCard';

export default {
  component: DobbleCard,
  args: {
    images: ['😀', '🎉', '🚀', '🌟', '🔥', '💡'],
    randomnessFactor: 0,
  },
  argTypes: {
    randomnessFactor: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
  },
} satisfies Meta<typeof DobbleCard>;

export const Default: StoryObj<typeof DobbleCard> = {};
