import type { Meta, StoryObj } from '@storybook/react';
import { TaskRow } from './TaskRow';
import type { Task } from './types';

const mockTask: Task = {
  id: 'task-1',
  task_number: 42,
  title: 'Implement user authentication',
  description: 'Add login and signup flows with OAuth support.',
  status: 'in_progress',
  priority: 'high',
  owner_agent_id: 'agent-1',
  assigned_agent_id: 'agent-1',
  subtasks: [
    { title: 'Login page', completed: true },
    { title: 'Signup page', completed: true },
    { title: 'OAuth integration', completed: false },
    { title: 'Session management', completed: false },
  ],
  metadata: null,
  worker_id: null,
  created_by: 'user-1',
  created_at: '2026-03-25T10:00:00Z',
  updated_at: '2026-03-29T14:00:00Z',
  completed_at: null,
};

const meta = {
  title: 'AI/TaskRow',
  component: TaskRow,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    task: mockTask,
  },
} satisfies Meta<typeof TaskRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const WithActions: Story = {
  args: {
    onStatusChange: () => {},
    onDelete: () => {},
    resolveAgentName: (id) => id === 'agent-1' ? 'Alpha Agent' : 'Unknown',
  },
};

export const Completed: Story = {
  args: {
    task: {
      ...mockTask,
      status: 'done',
      completed_at: '2026-03-29T12:00:00Z',
      subtasks: mockTask.subtasks.map((s) => ({ ...s, completed: true })),
    },
  },
};

export const Backlog: Story = {
  args: {
    task: {
      ...mockTask,
      status: 'backlog',
      priority: 'low',
      subtasks: [],
    },
  },
};
