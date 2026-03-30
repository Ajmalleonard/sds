import type { Meta, StoryObj } from '@storybook/react';
import { TaskStatusIcon } from './TaskStatusIcon';
import { TaskPriorityIcon } from './TaskPriorityIcon';

const statusMeta = {
  title: 'AI/TaskStatusIcon',
  component: TaskStatusIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['done', 'in_progress', 'ready', 'pending_approval', 'backlog'],
    },
    size: { control: 'number' },
  },
  args: {
    status: 'in_progress',
    size: 16,
  },
} satisfies Meta<typeof TaskStatusIcon>;

export default statusMeta;

export const AllStatuses: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <TaskStatusIcon status="done" size={24} />
        <span className="text-ink-dull text-xs">Done</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TaskStatusIcon status="in_progress" size={24} />
        <span className="text-ink-dull text-xs">In Progress</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TaskStatusIcon status="ready" size={24} />
        <span className="text-ink-dull text-xs">Ready</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TaskStatusIcon status="pending_approval" size={24} />
        <span className="text-ink-dull text-xs">Pending</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TaskStatusIcon status="backlog" size={24} />
        <span className="text-ink-dull text-xs">Backlog</span>
      </div>
    </div>
  ),
};

export const InProgress: StoryObj = {
  args: { status: 'in_progress' },
};

export const Large: StoryObj = {
  args: { status: 'done', size: 32 },
};

export const AllPriorities: StoryObj = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <TaskPriorityIcon priority="critical" size={20} />
        <span className="text-ink-dull text-xs">Critical</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TaskPriorityIcon priority="high" size={20} />
        <span className="text-ink-dull text-xs">High</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TaskPriorityIcon priority="medium" size={20} />
        <span className="text-ink-dull text-xs">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <TaskPriorityIcon priority="low" size={20} />
        <span className="text-ink-dull text-xs">Low</span>
      </div>
    </div>
  ),
  name: 'All Priorities',
};
