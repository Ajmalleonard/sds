import type { Meta, StoryObj } from '@storybook/react';
import { SwitchField } from './SwitchField';

const meta = {
  title: 'Forms/SwitchField',
  component: SwitchField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'enabled',
  },
} satisfies Meta<typeof SwitchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <form className="w-[300px]">
      <SwitchField {...args} />
    </form>
  ),
};

export const WithLabel: Story = {
  args: {
    label: 'Dark Mode',
  },
  render: (args) => (
    <form className="w-[300px]">
      <SwitchField {...args} />
    </form>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'Email Notifications',
    description: 'Receive email updates about new features.',
  },
  render: (args) => (
    <form className="w-[300px]">
      <SwitchField {...args} />
    </form>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    description: 'This setting cannot be changed.',
    disabled: true,
  },
  render: (args) => (
    <form className="w-[300px]">
      <SwitchField {...args} />
    </form>
  ),
};
