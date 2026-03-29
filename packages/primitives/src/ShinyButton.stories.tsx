import type { Meta, StoryObj } from '@storybook/react';
import { ShinyButton } from './ShinyButton';
import { ShinyToggle } from './ShinyToggle';
import { useState } from 'react';

const shinyButtonMeta = {
  title: 'Primitives/ShinyButton',
  component: ShinyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
    glow: {
      control: 'select',
      options: ['lg', 'sm', 'none'],
    },
  },
  args: {
    children: 'Download',
    size: 'default',
    glow: 'lg',
  },
} satisfies Meta<typeof ShinyButton>;

export default shinyButtonMeta;
type Story = StoryObj<typeof shinyButtonMeta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const SmallGlow: Story = {
  args: {
    glow: 'sm',
  },
};

export const NoGlow: Story = {
  args: {
    glow: 'none',
  },
};

export const AsLink: Story = {
  args: {
    href: '#',
    children: 'Get Started',
  },
};

// --- ShinyToggle ---
export const ToggleDemo: StoryObj<typeof ShinyToggle> = {
  render: () => {
    const [value, setValue] = useState('monthly');
    return (
      <ShinyToggle
        value={value}
        onChange={setValue}
        options={[
          { value: 'monthly', label: 'Monthly' },
          { value: 'yearly', label: 'Yearly', count: 12 },
        ]}
      />
    );
  },
  name: 'ShinyToggle',
};
