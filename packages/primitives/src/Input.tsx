import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="w-full">
        <input
          ref={ref}
          className={clsx(
            'flex h-9 w-full rounded-md border border-app-line bg-app-box px-3 py-2 text-sm text-ink placeholder:text-ink-faint',
            'focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error && 'border-status-error focus:border-status-error focus:ring-status-error/20',
            className
          )}
          {...props}
        />
        {error && (
          <span className="mt-1 text-xs text-status-error">{error}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
