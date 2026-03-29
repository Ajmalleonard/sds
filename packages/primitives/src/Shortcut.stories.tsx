import type { Meta, StoryObj } from '@storybook/react';
import { Shortcut } from './Shortcut';

const meta = {
  title: 'Primitives/Shortcut',
  component: Shortcut,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    chars: '⌘S',
  },
} satisfies Meta<typeof Shortcut>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultipleKeys: Story = {
  args: {
    chars: '⌘⇧P',
  },
};

export const SingleKey: Story = {
  args: {
    chars: 'Esc',
  },
};
