import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, Kbd } from './Tooltip';

const meta = {
  title: 'Primitives/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
  },
  args: {
    label: 'Tooltip text',
    position: 'bottom',
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <button className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm">
        Hover me
      </button>
    </Tooltip>
  ),
};

export const Top: Story = {
  args: { position: 'top' },
  render: (args) => (
    <Tooltip {...args}>
      <button className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm">
        Top tooltip
      </button>
    </Tooltip>
  ),
};

export const WithKeybinds: Story = {
  args: {
    label: 'Save file',
    keybinds: ['⌘', 'S'],
  },
  render: (args) => (
    <Tooltip {...args}>
      <button className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm">
        Save
      </button>
    </Tooltip>
  ),
};

export const KbdComponent: StoryObj<typeof Kbd> = {
  render: () => (
    <div className="flex gap-2">
      <Kbd>⌘</Kbd>
      <Kbd>S</Kbd>
      <Kbd>Ctrl</Kbd>
    </div>
  ),
  name: 'Kbd',
};
