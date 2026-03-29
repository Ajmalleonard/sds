import type { Meta, StoryObj } from '@storybook/react';
import { FilterButton } from './FilterButton';

const meta = {
  title: 'Primitives/FilterButton',
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'boolean',
    },
  },
  args: {
    label: 'Filter',
    active: false,
  },
} satisfies Meta<typeof FilterButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const LongLabel: Story = {
  args: {
    label: 'Status: In Progress',
    active: true,
  },
};
