import { Meta, StoryObj } from '@storybook/react';
import { DobbleCards } from './DobbleCards';

export default {
  component: DobbleCards,
  args: {
    images: [
      '😀',
      '😄',
      '😁',
      '😆',
      '😅',
      '😂',
      '🤣',
      '😊',
      '😇',
      '🙂',
      '😉',
      '😌',
      '😍',
    ],
    randomnessFactor: 0,
  },
  argTypes: {
    randomnessFactor: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 },
    },
  },
} satisfies Meta<typeof DobbleCards>;

export const Default: StoryObj<typeof DobbleCards> = {};
