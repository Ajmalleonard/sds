import type { Meta, StoryObj } from '@storybook/react';
import { KindIcon } from '@spaceui/explorer';

const meta = {
  title: 'Explorer/KindIcon',
  component: KindIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    kind: {
      control: 'select',
      options: ['document', 'image', 'video', 'audio', 'archive', 'executable', 'code', 'unknown'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
  args: {
    kind: 'document',
    size: 'md',
  },
} satisfies Meta<typeof KindIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Document: Story = {
  args: { kind: 'document' },
};

export const Image: Story = {
  args: { kind: 'image' },
};

export const Video: Story = {
  args: { kind: 'video' },
};

export const Audio: Story = {
  args: { kind: 'audio' },
};

export const Code: Story = {
  args: { kind: 'code' },
};

export const Archive: Story = {
  args: { kind: 'archive' },
};

export const Unknown: Story = {
  args: { kind: 'unknown' },
};
