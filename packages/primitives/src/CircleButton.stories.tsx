import type { Meta, StoryObj } from '@storybook/react';
import { CircleButton } from './CircleButton';
import { CircleButtonGroup } from './CircleButtonGroup';

const meta = {
  title: 'Primitives/CircleButton',
  component: CircleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'active', 'accent', 'solid'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    variant: 'default',
    size: 'md',
    children: 'A',
  },
} satisfies Meta<typeof CircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    variant: 'active',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

// --- CircleButtonGroup ---
export const Group: StoryObj<typeof CircleButtonGroup> = {
  render: () => (
    <CircleButtonGroup>
      <CircleButton>A</CircleButton>
      <CircleButton>B</CircleButton>
      <CircleButton>C</CircleButton>
    </CircleButtonGroup>
  ),
  name: 'CircleButtonGroup',
};
