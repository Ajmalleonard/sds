import type { Meta, StoryObj } from '@storybook/react';
import { SelectField } from './SelectField';

const meta = {
  title: 'Forms/SelectField',
  component: SelectField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'fruit',
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'cherry', label: 'Cherry' },
    ],
  },
} satisfies Meta<typeof SelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <form className="w-[300px]">
      <SelectField {...args} />
    </form>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Favorite Fruit',
    placeholder: 'Select a fruit...',
  },
  render: (args) => (
    <form className="w-[300px]">
      <SelectField {...args} />
    </form>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'Country',
    description: 'Select your country of residence.',
    placeholder: 'Choose country...',
    options: [
      { value: 'us', label: 'United States' },
      { value: 'uk', label: 'United Kingdom' },
      { value: 'ca', label: 'Canada' },
    ],
  },
  render: (args) => (
    <form className="w-[300px]">
      <SelectField {...args} />
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    disabled: true,
  },
  render: (args) => (
    <form className="w-[300px]">
      <SelectField {...args} />
    </form>
  ),
};
