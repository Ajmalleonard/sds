import type { Meta, StoryObj } from '@storybook/react';
import { SelectPill } from './SelectPill';

const meta = {
  title: 'Primitives/SelectPill',
  component: SelectPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'sidebar', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    hideCaret: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    size: 'md',
    children: 'Select option',
  },
} satisfies Meta<typeof SelectPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sidebar: Story = {
  args: {
    variant: 'sidebar',
    children: 'Sidebar pill',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost pill',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large pill',
  },
};

export const HiddenCaret: Story = {
  args: {
    hideCaret: true,
    children: 'No caret',
  },
};
