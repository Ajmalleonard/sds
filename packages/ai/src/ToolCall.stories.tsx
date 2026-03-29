import type { Meta, StoryObj } from '@storybook/react';
import { ToolCall } from './ToolCall';

const meta: Meta<typeof ToolCall> = {
  title: 'AI/ToolCall',
  component: ToolCall,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToolCall>;

export const Running: Story = {
  args: {
    pair: {
      id: 'mock-1',
      name: 'browser_navigate',
      argsRaw: '{"url": "https://google.com"}',
      args: { url: 'https://google.com' },
      resultRaw: null,
      result: null,
      status: 'running',
    },
  },
};

export const Completed: Story = {
  args: {
    pair: {
      id: 'mock-2',
      name: 'browser_navigate',
      argsRaw: '{"url": "https://google.com"}',
      args: { url: 'https://google.com' },
      resultRaw: 'Page loaded: Google',
      result: { title: 'Google', url: 'https://google.com' },
      status: 'completed',
    },
  },
};

export const ErrorState: Story = {
  args: {
    pair: {
      id: 'mock-3',
      name: 'shell',
      argsRaw: '{"command": "ls non-existent"}',
      args: { command: 'ls non-existent' },
      resultRaw: 'ls: non-existent: No such file or directory',
      result: { exit_code: 1, stderr: 'ls: non-existent: No such file or directory' },
      status: 'error',
    },
  },
};
