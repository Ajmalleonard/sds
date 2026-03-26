import { clsx } from 'clsx';
import { forwardRef, useState, useRef, useEffect } from 'react';
import { PaperPlaneRight, Microphone, Image as ImageIcon } from '@phosphor-icons/react';
import { Button } from '@spaceui/primitives';
import type { ModelOption } from './types';

interface ChatComposerProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  onVoiceClick?: () => void;
  onImageClick?: () => void;
  disabled?: boolean;
  placeholder?: string;
  models?: ModelOption[];
  selectedModel?: string;
  onModelChange?: (model: string) => void;
  className?: string;
}

const ChatComposer = forwardRef<HTMLDivElement, ChatComposerProps>(
  ({ 
    value, 
    onChange, 
    onSend, 
    onVoiceClick, 
    onImageClick,
    disabled = false,
    placeholder = 'Type a message...',
    models,
    selectedModel,
    onModelChange,
    className 
  }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
      }
    }, [value]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!disabled && value.trim()) {
          onSend();
        }
      }
    };

    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-xl border border-app-line bg-app-box transition-all',
          isFocused && 'border-accent ring-2 ring-accent/20',
          className
        )}
      >
        {models && onModelChange && (
          <div className="flex items-center gap-2 border-b border-app-line px-3 py-2">
            <select
              value={selectedModel}
              onChange={(e) => onModelChange(e.target.value)}
              className="bg-transparent text-xs text-ink-dull focus:outline-none"
            >
              {models.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="p-3">
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            rows={1}
            className="w-full resize-none bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none min-h-[24px] max-h-[200px]"
          />

          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              {onVoiceClick && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7"
                  onClick={onVoiceClick}
                  disabled={disabled}
                >
                  <Microphone className="size-4" />
                </Button>
              )}
              {onImageClick && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-7"
                  onClick={onImageClick}
                  disabled={disabled}
                >
                  <ImageIcon className="size-4" />
                </Button>
              )}
            </div>

            <Button
              variant="default"
              size="icon"
              className="size-7"
              onClick={onSend}
              disabled={disabled || !value.trim()}
            >
              <PaperPlaneRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

ChatComposer.displayName = 'ChatComposer';

export { ChatComposer };
