import type { Meta, StoryObj } from '@storybook/react';
import { InlineWorkerCard } from './InlineWorkerCard';

const meta = {
  title: 'AI/InlineWorkerCard',
  component: InlineWorkerCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    title: 'Search Agent',
    status: 'running',
    toolCallCount: 3,
    transcript: [],
  },
} satisfies Meta<typeof InlineWorkerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTranscript = [
  { type: 'action' as const, content: [{ type: 'text' as const, text: 'Searching for files...' }] },
  { type: 'tool_result' as const, call_id: '1', name: 'file_search', text: 'Found 3 files' },
  { type: 'action' as const, content: [{ type: 'text' as const, text: 'Reading file contents...' }] },
  { type: 'tool_result' as const, call_id: '2', name: 'read_file', text: 'File contents loaded' },
  { type: 'system_text' as const, text: 'Task completed successfully.' },
];

export const Running: Story = {
  args: {
    title: 'Code Analysis Agent',
    status: 'running',
    toolCallCount: 5,
    liveStatus: 'Analyzing file structure...',
    transcript: mockTranscript,
  },
};

export const Completed: Story = {
  args: {
    title: 'Search Agent',
    status: 'completed',
    toolCallCount: 3,
    transcript: mockTranscript,
  },
};

export const WithActions: Story = {
  args: {
    title: 'Build Agent',
    status: 'running',
    toolCallCount: 8,
    liveStatus: 'Compiling...',
    transcript: mockTranscript,
    onCopyLogs: () => {},
    onCancel: () => {},
  },
};

export const Loading: Story = {
  args: {
    title: 'Agent',
    status: 'running',
    toolCallCount: 0,
    transcript: [],
    isTranscriptLoading: true,
  },
};
