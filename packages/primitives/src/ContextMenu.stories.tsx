import type { Meta, StoryObj } from '@storybook/react';
import { ContextMenu, ContextMenuDivItem } from './ContextMenu';

const meta = {
  title: 'Primitives/ContextMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => (
    <ContextMenu.Root
      trigger={
        <div className="w-[300px] h-[200px] bg-app-box border border-app-line rounded-md flex items-center justify-center text-ink-dull text-sm">
          Right-click here
        </div>
      }
    >
      <ContextMenu.Item label="Copy" onClick={() => {}} />
      <ContextMenu.Item label="Paste" onClick={() => {}} />
      <ContextMenu.Separator />
      <ContextMenu.Item label="Delete" variant="danger" onClick={() => {}} />
    </ContextMenu.Root>
  ),
};

export const WithCheckboxes: StoryObj = {
  render: () => (
    <ContextMenu.Root
      trigger={
        <div className="w-[300px] h-[200px] bg-app-box border border-app-line rounded-md flex items-center justify-center text-ink-dull text-sm">
          Right-click for options
        </div>
      }
    >
      <ContextMenu.CheckboxItem label="Show hidden files" checked />
      <ContextMenu.CheckboxItem label="Show extensions" checked={false} />
      <ContextMenu.Separator />
      <ContextMenu.Item label="Refresh" onClick={() => {}} />
    </ContextMenu.Root>
  ),
};

export const WithKeybinds: StoryObj = {
  render: () => (
    <ContextMenu.Root
      trigger={
        <div className="w-[300px] h-[200px] bg-app-box border border-app-line rounded-md flex items-center justify-center text-ink-dull text-sm">
          Right-click for shortcuts
        </div>
      }
    >
      <ContextMenu.Item label="Cut" keybind="X" onClick={() => {}} />
      <ContextMenu.Item label="Copy" keybind="C" onClick={() => {}} />
      <ContextMenu.Item label="Paste" keybind="V" onClick={() => {}} />
    </ContextMenu.Root>
  ),
};

export const CustomContent: StoryObj = {
  render: () => (
    <ContextMenu.Root
      trigger={
        <div className="w-[300px] h-[200px] bg-app-box border border-app-line rounded-md flex items-center justify-center text-ink-dull text-sm">
          Right-click for custom menu
        </div>
      }
    >
      <ContextMenuDivItem>
        <div className="px-2 py-1">
          <p className="text-ink text-xs font-semibold">Custom Item</p>
          <p className="text-ink-dull text-[10px]">With description</p>
        </div>
      </ContextMenuDivItem>
      <ContextMenu.Separator />
      <ContextMenu.Item label="Action" onClick={() => {}} />
    </ContextMenu.Root>
  ),
};
