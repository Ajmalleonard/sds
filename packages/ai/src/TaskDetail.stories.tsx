import type { Meta, StoryObj } from '@storybook/react';
import { TaskDetail } from './TaskDetail';
import type { Task } from './types';

const mockTask: Task = {
  id: 'task-1',
  task_number: 42,
  title: 'Implement user authentication',
  description: 'Add login and signup flows with OAuth support. This should include Google and GitHub providers.',
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

const resolveAgentName = (id: string) => {
  const map: Record<string, string> = { 'agent-1': 'Alpha Agent', 'agent-2': 'Beta Agent' };
  return map[id] || id;
};

const meta = {
  title: 'AI/TaskDetail',
  component: TaskDetail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    task: mockTask,
  },
} satisfies Meta<typeof TaskDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    resolveAgentName,
    onStatusChange: () => {},
    onSubtaskToggle: () => {},
    onClose: () => {},
    onDelete: () => {},
  },
};

export const PendingApproval: Story = {
  args: {
    task: { ...mockTask, status: 'pending_approval' },
    resolveAgentName,
    onStatusChange: () => {},
    onClose: () => {},
  },
};

export const Ready: Story = {
  args: {
    task: { ...mockTask, status: 'ready' },
    resolveAgentName,
    onStatusChange: () => {},
    onClose: () => {},
  },
};

export const Done: Story = {
  args: {
    task: {
      ...mockTask,
      status: 'done',
      completed_at: '2026-03-29T18:00:00Z',
      subtasks: mockTask.subtasks.map((s) => ({ ...s, completed: true })),
    },
    resolveAgentName,
    onStatusChange: () => {},
    onClose: () => {},
  },
};

export const Backlog: Story = {
  args: {
    task: { ...mockTask, status: 'backlog', priority: 'low', subtasks: [] },
    resolveAgentName,
    onStatusChange: () => {},
    onClose: () => {},
  },
};

export const NoDescription: Story = {
  args: {
    task: { ...mockTask, description: null },
    resolveAgentName,
    onClose: () => {},
  },
};
