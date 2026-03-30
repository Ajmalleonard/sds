import type { Meta, StoryObj } from '@storybook/react';
import { Loader, LoaderIcon } from './Loader';

const meta = {
  title: 'Primitives/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="bg-app p-8 rounded-lg flex gap-4">
      <Loader />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="bg-app p-8 rounded-lg flex items-center gap-8">
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
    </div>
  ),
};

export const LoaderIconDemo: StoryObj<typeof LoaderIcon> = {
  render: () => (
    <div className="bg-app p-8 rounded-lg grid grid-cols-3 gap-8">
      {(['default', 'primary', 'success', 'warning', 'destructive', 'white'] as const).map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <LoaderIcon variant={variant} />
          <span className="text-ink-dull text-xs capitalize">{variant}</span>
        </div>
      ))}
    </div>
  ),
};

export const LoaderIconSizes: StoryObj<typeof LoaderIcon> = {
  render: () => (
    <div className="bg-app p-8 rounded-lg flex items-center gap-8">
      <LoaderIcon size="sm" />
      <LoaderIcon size="md" />
      <LoaderIcon size="lg" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <div className="bg-app p-8 rounded-lg flex gap-4">
      <button className="bg-accent text-white px-4 py-2 rounded-md flex items-center gap-2">
        <LoaderIcon size="sm" variant="white" />
        Loading...
      </button>
      <button className="bg-app-box text-ink px-4 py-2 rounded-md flex items-center gap-2">
        <LoaderIcon size="sm" />
        Processing
      </button>
    </div>
  ),
};