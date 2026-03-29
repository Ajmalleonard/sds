import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta = {
  title: 'Primitives/Banner',
  component: Banner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'info', 'success', 'warning', 'error'],
    },
    showDot: {
      control: 'boolean',
    },
  },
  args: {
    variant: 'default',
    showDot: true,
    children: 'This is a banner message.',
  },
} satisfies Meta<typeof Banner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: { variant: 'info', children: 'New update available.' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Changes saved successfully.' },
};

export const Warning: Story = {
  args: { variant: 'warning', children: 'Please review your settings.' },
};

export const Error: Story = {
  args: { variant: 'error', children: 'Something went wrong.' },
};

export const WithoutDot: Story = {
  args: { showDot: false },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-2 w-[400px]">
      <Banner variant="default">Default banner</Banner>
      <Banner variant="info">Info banner</Banner>
      <Banner variant="success">Success banner</Banner>
      <Banner variant="warning">Warning banner</Banner>
      <Banner variant="error">Error banner</Banner>
    </div>
  ),
};
