import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Primitives/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <p className="text-ink text-sm mb-2">Content above</p>
      <Divider />
      <p className="text-ink text-sm mt-2">Content below</p>
    </div>
  ),
};

export const Standalone: Story = {
  render: () => <div className="w-[300px]"><Divider /></div>,
};
