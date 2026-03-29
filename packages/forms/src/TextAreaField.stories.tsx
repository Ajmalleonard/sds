import type { Meta, StoryObj } from '@storybook/react';
import { TextAreaField } from './TextAreaField';

function TextAreaFieldDemo(props: React.ComponentProps<typeof TextAreaField>) {
  return (
    <form className="w-[300px]">
      <TextAreaField {...props} />
    </form>
  );
}

const meta = {
  title: 'Forms/TextAreaField',
  component: TextAreaField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'description',
  },
} satisfies Meta<typeof TextAreaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <TextAreaFieldDemo name="description" placeholder="Enter description..." />,
};

export const WithLabel: Story = {
  render: () => (
    <TextAreaFieldDemo
      name="description"
      label="Bio"
      placeholder="Tell us about yourself..."
    />
  ),
};

export const WithDescription: Story = {
  render: () => (
    <TextAreaFieldDemo
      name="description"
      label="Comments"
      description="Share your feedback (max 500 characters)."
      placeholder="Write here..."
    />
  ),
};

export const CustomRows: Story = {
  render: () => (
    <TextAreaFieldDemo
      name="description"
      label="Long Content"
      rows={8}
      placeholder="Enter a longer text..."
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextAreaFieldDemo
      name="description"
      label="Disabled"
      placeholder="Can't edit"
      disabled
    />
  ),
};
