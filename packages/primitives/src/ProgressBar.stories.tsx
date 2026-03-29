import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta = {
  title: 'Primitives/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    percent: 50,
  },
};

export const Complete: Story = {
  args: {
    percent: 100,
  },
};

export const Low: Story = {
  args: {
    percent: 15,
  },
};

export const Pending: Story = {
  args: {
    percent: 0,
    pending: true,
  },
};

export const WithValues: Story = {
  args: {
    value: 75,
    total: 100,
  },
};
