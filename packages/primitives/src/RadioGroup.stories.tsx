import type { Meta, StoryObj } from '@storybook/react';
import { Root as RadioGroupRoot, Item as RadioGroupItem } from './RadioGroup';

const meta = {
  title: 'Primitives/RadioGroup',
  component: RadioGroupRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroupRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroupRoot defaultValue="option-1">
      <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
      <RadioGroupItem value="option-3">Option 3</RadioGroupItem>
    </RadioGroupRoot>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <RadioGroupRoot defaultValue="option-1">
      <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option-2" disabled>Option 2 (disabled)</RadioGroupItem>
      <RadioGroupItem value="option-3">Option 3</RadioGroupItem>
    </RadioGroupRoot>
  ),
};

export const AllDisabled: Story = {
  render: () => (
    <RadioGroupRoot defaultValue="option-1" disabled>
      <RadioGroupItem value="option-1">Option 1</RadioGroupItem>
      <RadioGroupItem value="option-2">Option 2</RadioGroupItem>
      <RadioGroupItem value="option-3">Option 3</RadioGroupItem>
    </RadioGroupRoot>
  ),
};
