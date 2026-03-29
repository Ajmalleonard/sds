import type { Meta, StoryObj } from '@storybook/react';
import { ModelSelector } from './ModelSelector';
import { useState } from 'react';

const mockModels = [
  { id: 'claude-sonnet-4-20250514', name: 'Claude Sonnet 4', provider: 'Anthropic', context_window: 200000 },
  { id: 'claude-opus-4-20250514', name: 'Claude Opus 4', provider: 'Anthropic', context_window: 200000 },
  { id: 'gpt-4o', name: 'GPT-4o', provider: 'OpenAI', context_window: 128000 },
  { id: 'gpt-4o-mini', name: 'GPT-4o Mini', provider: 'OpenAI', context_window: 128000 },
  { id: 'gemini-2.0-flash', name: 'Gemini 2.0 Flash', provider: 'Google', context_window: 1000000 },
  { id: 'gemini-2.0-pro', name: 'Gemini 2.0 Pro', provider: 'Google', context_window: 2000000 },
];

const meta = {
  title: 'AI/ModelSelector',
  component: ModelSelector,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    models: mockModels,
    value: '',
    onChange: () => {},
  },
} satisfies Meta<typeof ModelSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('claude-sonnet-4-20250514');
    return (
      <ModelSelector
        models={mockModels}
        value={value}
        onChange={setValue}
      />
    );
  },
};

export const Empty: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <ModelSelector
        models={mockModels}
        value={value}
        onChange={setValue}
        placeholder="Choose a model..."
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <ModelSelector
      models={mockModels}
      value="gpt-4o"
      onChange={() => {}}
      disabled
    />
  ),
};

export const Small: Story = {
  render: () => {
    const [value, setValue] = useState('gemini-2.0-flash');
    return (
      <ModelSelector
        models={mockModels}
        value={value}
        onChange={setValue}
        size="sm"
      />
    );
  },
};
