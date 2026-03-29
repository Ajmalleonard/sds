import type { Meta, StoryObj } from '@storybook/react';
import { Markdown } from './Markdown';

const meta = {
  title: 'AI/Markdown',
  component: Markdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    content: '# Hello\n\nThis is **markdown**.',
  },
} satisfies Meta<typeof Markdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCodeBlock: Story = {
  args: {
    content: '```javascript\nconst greeting = "Hello, world!";\nconsole.log(greeting);\n```',
  },
};

export const WithTable: Story = {
  args: {
    content: '| Name | Age | Role |\n|------|-----|------|\n| Alice | 30 | Engineer |\n| Bob | 25 | Designer |',
  },
};

export const WithLinks: Story = {
  args: {
    content: 'Check out [this link](https://example.com) for more info.',
  },
};

export const WithList: Story = {
  args: {
    content: '- Item one\n- Item two\n- Item three\n\n1. First\n2. Second\n3. Third',
  },
};

export const RichContent: Story = {
  args: {
    content: `# Task Report

## Summary
The deployment was **successful** with *zero downtime*.

### Key Points
- All services are running
- Database migrations completed
- Cache warmed up

> Note: Monitor for the next 24 hours.

\`\`\`bash
curl -s https://api.example.com/health
# {"status": "ok"}
\`\`\`
`,
  },
};
