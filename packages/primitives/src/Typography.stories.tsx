import type { Meta, StoryObj } from '@storybook/react';
import { CategoryHeading, ScreenHeading } from './Typography';

const meta = {
  title: 'Primitives/Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Headings: StoryObj = {
  render: () => (
    <div className="space-y-4">
      <div>
        <CategoryHeading>Category Heading</CategoryHeading>
        <p className="text-ink-dull text-xs mt-1">Used for section labels</p>
      </div>
      <div>
        <ScreenHeading>Screen Heading</ScreenHeading>
        <p className="text-ink-dull text-xs mt-1">Used for page titles</p>
      </div>
    </div>
  ),
  name: 'All Headings',
};
