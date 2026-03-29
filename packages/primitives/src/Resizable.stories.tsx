import type { Meta, StoryObj } from '@storybook/react';
import { Resizable, ResizablePanel, ResizableHandle } from './Resizable';

const meta = {
  title: 'Primitives/Resizable',
  component: Resizable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Resizable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <div className="w-[600px] h-[300px] flex">
      <Resizable min={100} max={500}>
        <ResizablePanel className="bg-app-box border border-app-line rounded-l-md flex items-center justify-center h-full">
          <span className="text-ink text-sm">Panel 1</span>
        </ResizablePanel>
        <ResizableHandle className="w-1 bg-app-line hover:bg-accent cursor-col-resize transition-colors" />
      </Resizable>
      <div className="flex-1 bg-app-box border border-app-line rounded-r-md flex items-center justify-center">
        <span className="text-ink text-sm">Panel 2</span>
      </div>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="w-[400px] h-[400px] flex flex-col">
      <Resizable axis="y" min={50} max={300}>
        <ResizablePanel className="bg-app-box border border-app-line rounded-t-md flex items-center justify-center h-full">
          <span className="text-ink text-sm">Top Panel</span>
        </ResizablePanel>
        <ResizableHandle className="h-1 bg-app-line hover:bg-accent cursor-row-resize transition-colors" />
      </Resizable>
      <div className="flex-1 bg-app-box border border-app-line rounded-b-md flex items-center justify-center">
        <span className="text-ink text-sm">Bottom Panel</span>
      </div>
    </div>
  ),
};
