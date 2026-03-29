import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { InputField } from './InputField';

function InputFieldDemo(props: React.ComponentProps<typeof InputField>) {
  useForm({ defaultValues: { field: '' } });
  return (
    <form className="w-[300px]">
      <InputField {...props} />
    </form>
  );
}

const meta = {
  title: 'Forms/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'field',
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <InputFieldDemo name="field" placeholder="Enter text..." />,
};

export const WithLabel: Story = {
  render: () => <InputFieldDemo name="field" label="Username" placeholder="johndoe" />,
};

export const WithDescription: Story = {
  render: () => (
    <InputFieldDemo
      name="field"
      label="Email"
      description="We'll never share your email."
      placeholder="you@example.com"
    />
  ),
};

export const Password: Story = {
  render: () => (
    <InputFieldDemo
      name="field"
      label="Password"
      type="password"
      placeholder="Enter password"
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <InputFieldDemo
      name="field"
      label="Disabled Field"
      placeholder="Can't edit this"
      disabled
    />
  ),
};
