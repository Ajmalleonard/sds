import type { Meta, StoryObj } from '@storybook/react';
import { MessageBubble } from './MessageBubble';

const meta = {
  title: 'AI/MessageBubble',
  component: MessageBubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    content: 'Hello!',
    isUser: false,
  },
} satisfies Meta<typeof MessageBubble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const UserMessage: Story = {
  args: {
    content: 'Can you help me write a function that sorts an array?',
    isUser: true,
  },
};

export const AIMessage: Story = {
  args: {
    content: 'Sure! Here is a simple sorting function using JavaScript:\n\n```javascript\nconst sort = arr => arr.sort((a, b) => a - b);\n```',
    isUser: false,
  },
};

export const AIWithCopy: Story = {
  args: {
    content: 'Here is the code you requested.',
    isUser: false,
    onCopy: () => {},
  },
};

export const Streaming: Story = {
  args: {
    content: 'Thinking about the solution...',
    isUser: false,
    isStreaming: true,
  },
};

export const Conversation: Story = {
  render: () => (
    <div className="space-y-4 w-[500px]">
      <MessageBubble content="What is TypeScript?" isUser />
      <MessageBubble content="TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript." isUser={false} onCopy={() => {}} />
      <MessageBubble content="Can you show me an example?" isUser />
      <MessageBubble content={`Sure! Here is an example:\n\n\`\`\`typescript\ninterface User {\n  name: string;\n  age: number;\n}\n\`\`\``} isUser={false} onCopy={() => {}} />
    </div>
  ),
};
