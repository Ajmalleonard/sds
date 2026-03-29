import type { Meta, StoryObj } from '@storybook/react';
import { SelectTriggerButton } from './SelectTriggerButton';

const meta = {
  title: 'Primitives/SelectTriggerButton',
  component: SelectTriggerButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Select an option...',
  },
} satisfies Meta<typeof SelectTriggerButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    children: 'Selected option',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Choose a category...',
  },
};
