import type { Meta, StoryObj } from '@storybook/react';
import { Root as TabsRoot, List as TabsList, Trigger as TabsTrigger, Content as TabsContent } from './Tabs';

const meta = {
  title: 'Primitives/Tabs',
  component: TabsRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TabsRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TabsRoot defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">Account</TabsTrigger>
        <TabsTrigger value="tab2">Password</TabsTrigger>
        <TabsTrigger value="tab3">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1" className="p-4">
        <p className="text-ink text-sm">Account settings content.</p>
      </TabsContent>
      <TabsContent value="tab2" className="p-4">
        <p className="text-ink text-sm">Password settings content.</p>
      </TabsContent>
      <TabsContent value="tab3" className="p-4">
        <p className="text-ink text-sm">General settings content.</p>
      </TabsContent>
    </TabsRoot>
  ),
};

export const TwoTabs: Story = {
  render: () => (
    <TabsRoot defaultValue="overview" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="p-4">
        <p className="text-ink text-sm">Overview content.</p>
      </TabsContent>
      <TabsContent value="analytics" className="p-4">
        <p className="text-ink text-sm">Analytics content.</p>
      </TabsContent>
    </TabsRoot>
  ),
};
