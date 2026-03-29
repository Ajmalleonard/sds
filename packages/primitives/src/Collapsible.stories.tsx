import type { Meta, StoryObj } from '@storybook/react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible';

const meta = {
  title: 'Primitives/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-[350px]">
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
        Click to expand
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 p-4 bg-app-box border border-app-line rounded-md">
        <p className="text-ink text-sm">This content is collapsible. Click the trigger above to toggle.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Collapsible defaultOpen className="w-[350px]">
      <CollapsibleTrigger className="flex items-center justify-between w-full px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
        Already open
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 p-4 bg-app-box border border-app-line rounded-md">
        <p className="text-ink text-sm">This content starts expanded.</p>
      </CollapsibleContent>
    </Collapsible>
  ),
};
