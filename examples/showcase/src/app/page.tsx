'use client';

import { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
  TabsRoot,
  TabsContent,
  TabsList,
  TabsTrigger,
  Input,
  Select,
  SelectOption,
  Tooltip,
  TooltipProvider,
} from '@square-experience/primitives';
import { ToolCall, Markdown, ModelSelector, TaskRow, TaskList } from '@square-experience/ai';
import { TagPill } from '@square-experience/explorer';
import type { ToolCallPair, Task, ModelOption } from '@square-experience/ai';

export default function ShowcasePage() {
  const [activeTab, setActiveTab] = useState('primitives');

  const toolCall: ToolCallPair = {
    id: '1',
    name: 'file_read',
    argsRaw: '{"path": "/docs/readme.md"}',
    args: { path: '/docs/readme.md' },
    resultRaw: '{"content": "# Hello World"}',
    result: { content: '# Hello World' },
    status: 'completed',
  };

  const task: Task = {
    id: '1',
    task_number: 42,
    title: 'Review pull request #42',
    status: 'in_progress',
    priority: 'high',
    owner_agent_id: 'agent-1',
    assigned_agent_id: 'agent-2',
    subtasks: [{ title: 'Check tests', completed: true }, { title: 'Review code', completed: false }],
    metadata: null,
    created_by: 'user-1',
    created_at: '2024-03-24T02:00:00Z',
    updated_at: '2024-03-24T03:00:00Z',
  };

  const model: ModelOption = {
    id: 'gpt-4',
    name: 'GPT-4',
    provider: 'OpenAI',
    context_window: 8192,
    capabilities: ['tools', 'reasoning'],
  };

  const tag = {
    id: '1',
    name: 'Important',
    color: '#ef4444',
  };

  const [selectValue, setSelectValue] = useState('1');

  return (
    <TooltipProvider>
      <div className="p-8 max-w-6xl mx-auto space-y-8">
        <header className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold text-ink">Square Experience Showcase</h1>
            <Badge variant="default">v0.0.1</Badge>
          </div>
          <p className="text-ink-dull">
            A demonstration of all Square Experience components across primitives, AI, and explorer packages.
          </p>
        </header>

        <TabsRoot value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="primitives">Primitives</TabsTrigger>
            <TabsTrigger value="ai">AI Components</TabsTrigger>
            <TabsTrigger value="explorer">Explorer</TabsTrigger>
            <TabsTrigger value="playground">Playground</TabsTrigger>
          </TabsList>

          <TabsContent value="primitives" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
                <CardDescription>Various button styles and states</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Primary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="destructive">Destructive</Button>
                <Button size="sm">Small</Button>
                <Button size="lg">Large</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="destructive">Error</Badge>
                <Badge variant="outline">Outline</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Input &amp; Select</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Enter text..." />
                <Select value={selectValue} onChange={setSelectValue}>
                  <SelectOption value="1">Option 1</SelectOption>
                  <SelectOption value="2">Option 2</SelectOption>
                  <SelectOption value="3">Option 3</SelectOption>
                </Select>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
              </CardHeader>
              <CardContent>
                <Tooltip label="This is a tooltip!" asChild>
                  <Button>Hover me</Button>
                </Tooltip>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>ToolCall</CardTitle>
              </CardHeader>
              <CardContent>
                <ToolCall pair={toolCall} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Markdown</CardTitle>
              </CardHeader>
              <CardContent>
                <Markdown content={`# Hello World\n\nThis is **bold** and *italic* text.\n\n- Item 1\n- Item 2\n- Item 3\n\n\`\`\`typescript\nconst greeting = "Hello";\nconsole.log(greeting);\n\`\`\``} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TaskRow</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskRow task={task} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>TaskList</CardTitle>
              </CardHeader>
              <CardContent>
                <TaskList tasks={[task]} onTaskClick={() => {}} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ModelSelector</CardTitle>
              </CardHeader>
              <CardContent>
                <ModelSelector
                  models={[model]}
                  value={model.id}
                  onChange={() => {}}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="explorer" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>TagPill</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-2">
                <TagPill color={tag.color}>{tag.name}</TagPill>
                <TagPill color="#3b82f6">Review</TagPill>
                <TagPill color="#22c55e" onRemove={() => {}}>Done</TagPill>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="playground" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Component Playground</CardTitle>
                <CardDescription>Mix and match components here</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <TaskRow task={task} />
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2">
                        <TagPill color={tag.color}>{tag.name}</TagPill>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </TabsRoot>
      </div>
    </TooltipProvider>
  );
}
