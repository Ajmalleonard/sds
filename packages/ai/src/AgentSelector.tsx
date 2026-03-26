import { clsx } from 'clsx';
import { forwardRef, useState } from 'react';
import { Check, CaretDown, Robot } from '@phosphor-icons/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
  Badge,
} from '@spaceui/primitives';
import type { AgentInfo } from './types';

interface AgentSelectorProps {
  agents: AgentInfo[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const AgentSelector = forwardRef<HTMLButtonElement, AgentSelectorProps>(
  ({ agents, value, onChange, placeholder = 'Select agent...', disabled, className }, ref) => {
    const [open, setOpen] = useState(false);
    const selectedAgent = agents.find((a) => a.id === value);

    const statusColors: Record<string, string> = {
      online: 'bg-status-success',
      offline: 'bg-ink-faint',
      busy: 'bg-status-warning',
      error: 'bg-status-error',
    };

    return (
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            className={clsx('w-full justify-between', className)}
            disabled={disabled}
          >
            <span className="flex items-center gap-2">
              <Robot className="size-4 text-ink-dull" />
              {selectedAgent ? (
                <>
                  <span className="truncate">{selectedAgent.name}</span>
                  {selectedAgent.status && (
                    <Badge variant="outline" className="ml-1">
                      <span
                        className={clsx(
                          'mr-1 size-1.5 rounded-full',
                          statusColors[selectedAgent.status]
                        )}
                      />
                      {selectedAgent.status}
                    </Badge>
                  )}
                </>
              ) : (
                <span className="text-ink-faint">{placeholder}</span>
              )}
            </span>
            <CaretDown className="size-4 text-ink-dull" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
          {agents.map((agent) => (
            <DropdownMenuItem
              key={agent.id}
              onClick={() => {
                onChange(agent.id);
                setOpen(false);
              }}
              className="flex items-center justify-between"
            >
              <div className="flex flex-col">
                <span className="font-medium">{agent.name}</span>
                <span className="text-xs text-ink-faint">{agent.detail}</span>
              </div>
              <div className="flex items-center gap-2">
                {agent.status && (
                  <span
                    className={clsx('size-2 rounded-full', statusColors[agent.status])}
                  />
                )}
                {value === agent.id && <Check className="size-4 text-accent" />}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
);

AgentSelector.displayName = 'AgentSelector';

export { AgentSelector };
