import type { Meta, StoryObj } from '@storybook/react';
import { InfoBanner, InfoBannerText, InfoBannerSubtext } from './InfoBanner';

const meta = {
  title: 'Primitives/InfoBanner',
  component: InfoBanner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'gray', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof InfoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    icon: <span>ℹ</span>,
    children: <InfoBannerText>This is an informational message.</InfoBannerText>,
  },
};

export const Gray: Story = {
  args: {
    variant: 'gray',
    icon: <span>📋</span>,
    children: <InfoBannerText>A neutral message.</InfoBannerText>,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    icon: <span>⚠</span>,
    children: <InfoBannerText>Warning: please review this carefully.</InfoBannerText>,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    icon: <span>⛔</span>,
    children: <InfoBannerText>Danger: irreversible action ahead.</InfoBannerText>,
  },
};

export const WithSubtext: Story = {
  args: {
    variant: 'info',
    icon: <span>ℹ</span>,
    children: (
      <>
        <InfoBannerText>Storage almost full</InfoBannerText>
        <InfoBannerSubtext>You have used 95% of your storage quota.</InfoBannerSubtext>
      </>
    ),
  },
};
