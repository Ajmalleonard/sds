import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './TaskList';
import type { Task } from './types';

const mockTasks: Task[] = [
  {
    id: 'task-1', task_number: 1, title: 'Set up CI/CD pipeline',
    status: 'in_progress', priority: 'high', owner_agent_id: 'agent-1', assigned_agent_id: 'agent-1',
    subtasks: [{ title: 'Configure GitHub Actions', completed: true }, { title: 'Add test stage', completed: false }],
    metadata: null, worker_id: null, created_by: 'user-1', created_at: '2026-03-25T10:00:00Z', updated_at: '2026-03-29T14:00:00Z',
  },
  {
    id: 'task-2', task_number: 2, title: 'Write API documentation',
    status: 'ready', priority: 'medium', owner_agent_id: 'agent-2', assigned_agent_id: 'agent-2',
    subtasks: [], metadata: null, worker_id: null, created_by: 'user-1', created_at: '2026-03-26T10:00:00Z', updated_at: '2026-03-28T10:00:00Z',
  },
  {
    id: 'task-3', task_number: 3, title: 'Fix login redirect bug',
    status: 'pending_approval', priority: 'critical', owner_agent_id: 'agent-1', assigned_agent_id: 'agent-1',
    subtasks: [{ title: 'Reproduce bug', completed: true }, { title: 'Apply fix', completed: true }, { title: 'Add regression test', completed: true }],
    metadata: null, worker_id: null, created_by: 'user-1', created_at: '2026-03-27T10:00:00Z', updated_at: '2026-03-29T16:00:00Z',
  },
  {
    id: 'task-4', task_number: 4, title: 'Migrate database schema',
    status: 'backlog', priority: 'low', owner_agent_id: 'agent-3', assigned_agent_id: 'agent-3',
    subtasks: [], metadata: null, worker_id: null, created_by: 'user-1', created_at: '2026-03-28T10:00:00Z', updated_at: '2026-03-28T10:00:00Z',
  },
  {
    id: 'task-5', task_number: 5, title: 'Deploy staging environment',
    status: 'done', priority: 'medium', owner_agent_id: 'agent-2', assigned_agent_id: 'agent-2',
    subtasks: [{ title: 'Configure env vars', completed: true }, { title: 'Deploy', completed: true }],
    metadata: null, worker_id: null, created_by: 'user-1', created_at: '2026-03-20T10:00:00Z', updated_at: '2026-03-22T10:00:00Z', completed_at: '2026-03-22T10:00:00Z',
  },
];

const meta = {
  title: 'AI/TaskList',
  component: TaskList,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  args: {
    tasks: mockTasks,
    onTaskClick: () => {},
  },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActiveTask: Story = {
  args: {
    activeTaskId: 'task-1',
    resolveAgentName: (id) => {
      const map: Record<string, string> = { 'agent-1': 'Alpha', 'agent-2': 'Beta', 'agent-3': 'Gamma' };
      return map[id] || id;
    },
  },
};

export const WithActions: Story = {
  args: {
    onStatusChange: () => {},
    onDelete: () => {},
    resolveAgentName: (id) => {
      const map: Record<string, string> = { 'agent-1': 'Alpha', 'agent-2': 'Beta', 'agent-3': 'Gamma' };
      return map[id] || id;
    },
  },
};
