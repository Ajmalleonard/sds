import type { Meta, StoryObj } from '@storybook/react';
import { TagPill } from './TagPill';

const meta = {
  title: 'Explorer/TagPill',
  component: TagPill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md'],
    },
    color: { control: 'color' },
  },
  args: {
    color: '#3b82f6',
    children: 'Tag',
    size: 'sm',
  },
} satisfies Meta<typeof TagPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ExtraSmall: Story = {
  args: { size: 'xs', children: 'XS Tag' },
};

export const Medium: Story = {
  args: { size: 'md', children: 'Medium Tag' },
};

export const WithRemove: Story = {
  args: {
    children: 'Removable',
    onRemove: () => {},
  },
};

export const Clickable: Story = {
  args: {
    children: 'Clickable',
    onClick: () => {},
  },
};

export const Colors: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <TagPill color="#3b82f6">Blue</TagPill>
      <TagPill color="#ef4444">Red</TagPill>
      <TagPill color="#22c55e">Green</TagPill>
      <TagPill color="#f59e0b">Amber</TagPill>
      <TagPill color="#8b5cf6">Purple</TagPill>
      <TagPill color="#ec4899">Pink</TagPill>
    </div>
  ),
};
