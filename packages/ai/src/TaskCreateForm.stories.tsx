import type { Meta, StoryObj } from '@storybook/react';
import { TaskCreateForm } from './TaskCreateForm';

const meta = {
  title: 'AI/TaskCreateForm',
  component: TaskCreateForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSubmit: () => {},
  },
} satisfies Meta<typeof TaskCreateForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCancel: Story = {
  args: {
    onCancel: () => {},
  },
};

export const DefaultPriority: Story = {
  args: {
    defaultPriority: 'high',
  },
};

export const Submitting: Story = {
  args: {
    isSubmitting: true,
  },
};
