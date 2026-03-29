import type { Meta, StoryObj } from '@storybook/react';
import { RenameInput } from './RenameInput';

const meta = {
  title: 'Explorer/RenameInput',
  component: RenameInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'document',
    onSave: async () => {},
    onCancel: () => {},
  },
} satisfies Meta<typeof RenameInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithExtension: Story = {
  args: {
    name: 'report',
    extension: 'pdf',
  },
};

export const LongName: Story = {
  args: {
    name: 'my-very-long-file-name-with-details',
    extension: 'tsx',
  },
};
