import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
  title: 'Primitives/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    min: { control: 'number' },
    max: { control: 'number' },
    step: { control: 'number' },
    disabled: { control: 'boolean' },
  },
  args: {
    min: 0,
    max: 100,
    step: 1,
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: [50],
    className: 'w-[300px]',
  },
};

export const WithValue: Story = {
  args: {
    value: [75],
    className: 'w-[300px]',
  },
};

export const Range: Story = {
  args: {
    defaultValue: [25, 75],
    className: 'w-[300px]',
  },
};

export const CustomStep: Story = {
  args: {
    defaultValue: [50],
    step: 10,
    className: 'w-[300px]',
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: [50],
    disabled: true,
    className: 'w-[300px]',
  },
};
