import type { Meta, StoryObj } from '@storybook/react';
import { NumberStepper } from './NumberStepper';
import { useState } from 'react';

const meta = {
  title: 'Primitives/NumberStepper',
  component: NumberStepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
    showProgress: { control: 'boolean' },
  },
  args: {
    value: 5,
    onChange: () => {},
    min: 0,
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof NumberStepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(5);
    return <NumberStepper value={value} onChange={setValue} />;
  },
};

export const WithProgress: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return <NumberStepper value={value} onChange={setValue} showProgress />;
  },
};

export const CustomRange: Story = {
  render: () => {
    const [value, setValue] = useState(5);
    return <NumberStepper value={value} onChange={setValue} min={0} max={10} step={1} />;
  },
};

export const Float: Story = {
  render: () => {
    const [value, setValue] = useState(2.5);
    return <NumberStepper value={value} onChange={setValue} allowFloat min={0} max={5} step={0.5} />;
  },
};

export const Disabled: Story = {
  render: () => {
    const [value, setValue] = useState(5);
    return <NumberStepper value={value} onChange={setValue} disabled />;
  },
};
