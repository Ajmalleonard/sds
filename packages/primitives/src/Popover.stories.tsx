import type { Meta, StoryObj } from '@storybook/react';
import {
  PopoverRoot,
  PopoverTrigger,
  PopoverContent,
} from './Popover';

const meta = {
  title: 'Primitives/Popover',
  component: PopoverRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PopoverRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
        Open Popover
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4 w-[250px]">
          <p className="text-ink text-sm font-medium mb-2">Popover Title</p>
          <p className="text-ink-dull text-xs">This is the popover content. Click outside to close.</p>
        </div>
      </PopoverContent>
    </PopoverRoot>
  ),
};

export const WithForm: Story = {
  render: () => (
    <PopoverRoot>
      <PopoverTrigger className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
        Edit Settings
      </PopoverTrigger>
      <PopoverContent>
        <div className="p-4 w-[280px] space-y-3">
          <p className="text-ink text-sm font-medium">Quick Settings</p>
          <div className="space-y-2">
            <label className="text-ink-dull text-xs block">Width</label>
            <input
              type="number"
              defaultValue={300}
              className="w-full h-8 px-2 bg-app-box border border-app-line rounded text-ink text-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="text-ink-dull text-xs block">Height</label>
            <input
              type="number"
              defaultValue={200}
              className="w-full h-8 px-2 bg-app-box border border-app-line rounded text-ink text-sm"
            />
          </div>
        </div>
      </PopoverContent>
    </PopoverRoot>
  ),
};
