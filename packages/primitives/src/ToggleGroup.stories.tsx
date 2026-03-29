import type { Meta, StoryObj } from '@storybook/react';
import { ToggleGroup } from './ToggleGroup';
import { useState } from 'react';

const meta = {
  title: 'Primitives/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 'left',
    onChange: () => {},
    options: [
      { value: 'left', label: 'Left' },
      { value: 'center', label: 'Center' },
      { value: 'right', label: 'Right' },
    ],
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('left');
    return (
      <ToggleGroup
        value={value}
        onChange={setValue}
        options={[
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ]}
      />
    );
  },
};

export const TwoOptions: Story = {
  render: () => {
    const [value, setValue] = useState('on');
    return (
      <ToggleGroup
        value={value}
        onChange={setValue}
        options={[
          { value: 'on', label: 'On' },
          { value: 'off', label: 'Off' },
        ]}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState('a');
    return (
      <ToggleGroup
        value={value}
        onChange={setValue}
        disabled
        options={[
          { value: 'a', label: 'A' },
          { value: 'b', label: 'B' },
          { value: 'c', label: 'C' },
        ]}
      />
    );
  },
};
