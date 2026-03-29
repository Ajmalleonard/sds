import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from './CircularProgress';

const meta = {
  title: 'Primitives/CircularProgress',
  component: CircularProgress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    strokeWidth: { control: { type: 'range', min: 1, max: 40, step: 1 } },
  },
  args: {
    radius: 60,
    progress: 75,
  },
} satisfies Meta<typeof CircularProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Complete: Story = {
  args: {
    progress: 100,
  },
};

export const Quarter: Story = {
  args: {
    progress: 25,
  },
};

export const Empty: Story = {
  args: {
    progress: 0,
  },
};

export const CustomColors: Story = {
  args: {
    progress: 60,
    strokeColor: '#22c55e',
    trackStrokeColor: '#1a1a2e',
    strokeWidth: 15,
  },
};

export const WithChild: Story = {
  args: {
    progress: 75,
  },
  render: (args) => (
    <CircularProgress {...args}>
      <span className="text-ink font-bold text-lg">75%</span>
    </CircularProgress>
  ),
};

export const ThinStroke: Story = {
  args: {
    progress: 50,
    strokeWidth: 8,
  },
};
