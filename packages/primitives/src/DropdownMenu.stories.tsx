import type { Meta, StoryObj } from '@storybook/react';
import {
  DropdownMenuRoot,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
} from './DropdownMenu';
import { useState } from 'react';

const meta = {
  title: 'Primitives/DropdownMenu',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

export const Default: StoryObj = {
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
        Open Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
};

export const WithLabels: StoryObj = {
  render: () => (
    <DropdownMenuRoot>
      <DropdownMenuTrigger className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
        File Menu
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>File</DropdownMenuLabel>
        <DropdownMenuItem>New File</DropdownMenuItem>
        <DropdownMenuItem>Open...</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Recent</DropdownMenuLabel>
        <DropdownMenuItem>Document.txt</DropdownMenuItem>
        <DropdownMenuItem>Image.png</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuRoot>
  ),
};

export const WithCheckbox: StoryObj = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
          View Options
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={checked} onCheckedChange={setChecked}>
            Show Sidebar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={!checked} onCheckedChange={(v) => setChecked(!v)}>
            Show Toolbar
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    );
  },
};

export const WithRadioGroup: StoryObj = {
  render: () => {
    const [value, setValue] = useState('light');
    return (
      <DropdownMenuRoot>
        <DropdownMenuTrigger className="px-4 py-2 bg-app-box border border-app-line rounded-md text-ink text-sm cursor-pointer">
          Theme
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={value} onValueChange={setValue}>
            <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenuRoot>
    );
  },
};
