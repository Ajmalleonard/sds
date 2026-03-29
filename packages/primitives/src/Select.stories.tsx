import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectOption } from './Select';
import { useState } from 'react';

const meta = {
  title: 'Primitives/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
  args: {
    size: 'sm',
    value: '',
    onChange: () => {},
    children: null,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

function SelectDemo({ size, disabled }: { size?: 'sm' | 'md' | 'lg'; disabled?: boolean }) {
  const [value, setValue] = useState('apple');
  return (
    <Select value={value} onChange={setValue} size={size} disabled={disabled} className="w-[200px]">
      <SelectOption value="apple">Apple</SelectOption>
      <SelectOption value="banana">Banana</SelectOption>
      <SelectOption value="cherry">Cherry</SelectOption>
    </Select>
  );
}

export const Default: Story = {
  render: () => <SelectDemo />,
};

export const Medium: Story = {
  render: () => <SelectDemo size="md" />,
};

export const Large: Story = {
  render: () => <SelectDemo size="lg" />,
};

export const Disabled: Story = {
  render: () => <SelectDemo disabled />,
};
