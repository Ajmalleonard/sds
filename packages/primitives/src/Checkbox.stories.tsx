import type { Meta, StoryObj } from '@storybook/react';
import { CheckBox, RadixCheckbox } from './Checkbox';

const meta = {
  title: 'Primitives/Checkbox',
  component: CheckBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  render: () => <CheckBox defaultChecked />,
};

export const Disabled: Story = {
  render: () => <CheckBox disabled />,
};

export const DisabledChecked: Story = {
  render: () => <CheckBox disabled defaultChecked />,
};

// --- RadixCheckbox ---
export const RadixDefault: StoryObj<typeof RadixCheckbox> = {
  render: () => <RadixCheckbox label="Accept terms" />,
  name: 'RadixCheckbox',
};

export const RadixChecked: StoryObj<typeof RadixCheckbox> = {
  render: () => <RadixCheckbox label="Accept terms" defaultChecked />,
  name: 'RadixCheckbox Checked',
};

export const RadixDisabled: StoryObj<typeof RadixCheckbox> = {
  render: () => <RadixCheckbox label="Disabled option" disabled />,
  name: 'RadixCheckbox Disabled',
};
