import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';
import { useState } from 'react';

const meta = {
  title: 'Primitives/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Search...',
  },
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  render: () => {
    const [value, setValue] = useState('search query');
    return <SearchBar value={value} onChange={setValue} className="w-[300px]" />;
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: 'Search files and folders...',
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div className="space-y-2">
        <SearchBar value={value} onChange={setValue} className="w-[300px]" />
        <p className="text-ink-dull text-xs">Value: {value || '(empty)'}</p>
      </div>
    );
  },
};
