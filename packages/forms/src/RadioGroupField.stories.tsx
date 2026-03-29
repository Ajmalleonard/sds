import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroupField } from './RadioGroupField';

const meta = {
  title: 'Forms/RadioGroupField',
  component: RadioGroupField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'plan',
    options: [
      { value: 'free', label: 'Free' },
      { value: 'pro', label: 'Pro' },
      { value: 'enterprise', label: 'Enterprise' },
    ],
  },
} satisfies Meta<typeof RadioGroupField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <form className="w-[300px]">
      <RadioGroupField {...args} />
    </form>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Subscription Plan',
  },
  render: (args) => (
    <form className="w-[300px]">
      <RadioGroupField {...args} />
    </form>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'Notification Preference',
    description: 'How would you like to be notified?',
    options: [
      { value: 'email', label: 'Email' },
      { value: 'sms', label: 'SMS' },
      { value: 'push', label: 'Push Notification' },
    ],
  },
  render: (args) => (
    <form className="w-[300px]">
      <RadioGroupField {...args} />
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Group',
    disabled: true,
  },
  render: (args) => (
    <form className="w-[300px]">
      <RadioGroupField {...args} />
    </form>
  ),
};
