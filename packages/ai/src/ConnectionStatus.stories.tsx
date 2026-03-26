import type { Meta, StoryObj } from '@storybook/react';
import { ConnectionStatus } from '@spaceui/ai';

const meta = {
  title: 'AI/ConnectionStatus',
  component: ConnectionStatus,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['connected', 'connecting', 'offline', 'error'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
  args: {
    status: 'connected',
    showLabel: true,
  },
} satisfies Meta<typeof ConnectionStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Connected: Story = {
  args: {
    status: 'connected',
  },
};

export const Connecting: Story = {
  args: {
    status: 'connecting',
  },
};

export const Offline: Story = {
  args: {
    status: 'offline',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
};

export const IconOnly: Story = {
  args: {
    status: 'connected',
    showLabel: false,
  },
};
