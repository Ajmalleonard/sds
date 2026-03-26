// Tool execution types
export type ToolCallStatus = 'running' | 'completed' | 'error';

export interface ToolCallPair {
  id: string;
  name: string;
  argsRaw: string;
  args: Record<string, unknown> | null;
  resultRaw: string | null;
  result: Record<string, unknown> | null;
  status: ToolCallStatus;
}

// Worker transcripts
export type TranscriptStep = {
  type: 'action' | 'tool_result';
  call_id: string;
  name: string;
  content: Array<{ type: string; id: string; name: string; args: string }>;
  text: string;
};

// Domain objects
export interface TaskInfo {
  id: string;
  title: string;
  status: string;
  priority: string;
  assignees: string[];
  conversation_id?: string;
}

export interface MemoryInfo {
  id: string;
  type: string;
  content: string;
  source?: string;
  edges?: Array<{ target: string; relation: string }>;
}

export interface CronJobInfo {
  id: string;
  name: string;
  schedule: string;
  last_run?: string;
  next_run?: string;
  status: string;
}

export interface AgentInfo {
  id: string;
  name: string;
  detail: string;
  status?: string;
}

export interface ModelOption {
  id: string;
  name: string;
  provider: string;
  context_window?: number;
  capabilities?: string[];
}

// Utility function for pairing transcript steps
export function pairTranscriptSteps(steps: TranscriptStep[]): Array<[TranscriptStep | null, TranscriptStep | null]> {
  const pairs: Array<[TranscriptStep | null, TranscriptStep | null]> = [];
  const actionMap = new Map<string, TranscriptStep>();
  const resultMap = new Map<string, TranscriptStep>();

  for (const step of steps) {
    if (step.type === 'action') {
      actionMap.set(step.call_id, step);
    } else {
      resultMap.set(step.call_id, step);
    }
  }

  const allIds = new Set([...actionMap.keys(), ...resultMap.keys()]);
  
  for (const id of allIds) {
    pairs.push([actionMap.get(id) || null, resultMap.get(id) || null]);
  }

  return pairs;
}
