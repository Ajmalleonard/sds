import type { Meta, StoryObj } from '@storybook/react';
import { Input, SearchInput, TextArea, PasswordInput, Label } from './Input';

// --- Input ---
const inputMeta = {
  title: 'Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'transparent'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    error: {
      control: 'boolean',
    },
  },
  args: {
    placeholder: 'Enter text...',
    variant: 'default',
    size: 'sm',
  },
} satisfies Meta<typeof Input>;

export default inputMeta;
type Story = StoryObj<typeof inputMeta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'Hello world',
  },
};

export const Error: Story = {
  args: {
    error: true,
    value: 'Invalid input',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: 'Disabled',
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    value: 'Transparent input',
  },
};

// --- SearchInput ---
export const Search: StoryObj<typeof SearchInput> = {
  render: () => <SearchInput placeholder="Search..." />,
  name: 'SearchInput',
};

// --- TextArea ---
export const TextAreaDefault: StoryObj<typeof TextArea> = {
  render: () => <TextArea placeholder="Enter description..." />,
  name: 'TextArea',
};

export const TextAreaWithValue: StoryObj<typeof TextArea> = {
  render: () => <TextArea value="Multi-line\ntext content" />,
  name: 'TextArea with Value',
};

// --- PasswordInput ---
export const Password: StoryObj<typeof PasswordInput> = {
  render: () => <PasswordInput placeholder="Enter password..." />,
  name: 'PasswordInput',
};

// --- Label ---
export const LabelDefault: StoryObj<typeof Label> = {
  render: () => <Label slug="field">Field Label</Label>,
  name: 'Label',
};
