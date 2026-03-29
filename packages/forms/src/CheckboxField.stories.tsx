import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxField } from './CheckboxField';

const meta = {
  title: 'Forms/CheckboxField',
  component: CheckboxField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'terms',
  },
} satisfies Meta<typeof CheckboxField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <form className="w-[300px]">
      <CheckboxField {...args} />
    </form>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
  render: (args) => (
    <form className="w-[300px]">
      <CheckboxField {...args} />
    </form>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'Enable notifications',
    description: 'Receive email updates about your account activity.',
  },
  render: (args) => (
    <form className="w-[300px]">
      <CheckboxField {...args} />
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled option',
    description: 'This option is not available.',
    disabled: true,
  },
  render: (args) => (
    <form className="w-[300px]">
      <CheckboxField {...args} />
    </form>
  ),
};
