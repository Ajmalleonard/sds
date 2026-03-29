import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Dialog, Dialogs, dialogManager } from './Dialog';

const meta = {
  title: 'Primitives/Dialog',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => {
    const [, setTick] = useState(0);

    const openDialog = () => {
      dialogManager.create(
        (props) => <SimpleDialogWrapper dialogProps={props} />,
      );
      setTick((t) => t + 1);
    };

    return (
      <>
        <button
          className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer"
          onClick={openDialog}
        >
          Open Dialog
        </button>
        <Dialogs />
      </>
    );
  },
};

function SimpleDialogWrapper({ dialogProps }: { dialogProps: any }) {
  const form = useForm({ defaultValues: {} });
  return (
    <Dialog
      form={form}
      dialog={dialogProps}
      title="Confirm Action"
      description="Are you sure you want to proceed?"
      ctaLabel="Confirm"
      cancelLabel="Cancel"
    >
      <p className="text-ink text-sm p-4">This is the dialog body content.</p>
    </Dialog>
  );
}

export const DangerCTA: StoryObj = {
  render: () => {
    const [, setTick] = useState(0);

    const openDialog = () => {
      dialogManager.create(
        (props) => <DangerDialogWrapper dialogProps={props} />,
      );
      setTick((t) => t + 1);
    };

    return (
      <>
        <button
          className="px-4 py-2 bg-red-900/50 border border-red-500/30 rounded-md text-red-400 text-sm cursor-pointer"
          onClick={openDialog}
        >
          Delete Item
        </button>
        <Dialogs />
      </>
    );
  },
};

function DangerDialogWrapper({ dialogProps }: { dialogProps: any }) {
  const form = useForm({ defaultValues: {} });
  return (
    <Dialog
      form={form}
      dialog={dialogProps}
      title="Delete Item"
      description="This action cannot be undone."
      ctaLabel="Delete"
      ctaDanger
      cancelLabel="Cancel"
    >
      <p className="text-ink text-sm p-4">Are you sure you want to permanently delete this item?</p>
    </Dialog>
  );
}
