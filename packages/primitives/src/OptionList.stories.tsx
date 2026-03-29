import type { Meta, StoryObj } from '@storybook/react';
import { OptionList, OptionListItem } from './OptionList';

const meta = {
  title: 'Primitives/OptionList',
  component: OptionList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof OptionList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <OptionList className="w-[200px]">
      <OptionListItem>Option 1</OptionListItem>
      <OptionListItem selected>Option 2 (selected)</OptionListItem>
      <OptionListItem>Option 3</OptionListItem>
    </OptionList>
  ),
};

export const Small: Story = {
  render: () => (
    <OptionList className="w-[200px]">
      <OptionListItem size="sm">Small option 1</OptionListItem>
      <OptionListItem size="sm" selected>Small option 2</OptionListItem>
      <OptionListItem size="sm">Small option 3</OptionListItem>
    </OptionList>
  ),
};

export const Large: Story = {
  render: () => (
    <OptionList className="w-[200px]">
      <OptionListItem size="lg">Large option 1</OptionListItem>
      <OptionListItem size="lg" selected>Large option 2</OptionListItem>
      <OptionListItem size="lg">Large option 3</OptionListItem>
    </OptionList>
  ),
};
