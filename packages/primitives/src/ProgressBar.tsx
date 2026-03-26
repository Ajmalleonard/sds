import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ value, max = 100, variant = 'default', showLabel = false, size = 'md', className, ...props }, ref) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    const variantClasses = {
      default: 'bg-accent',
      success: 'bg-status-success',
      warning: 'bg-status-warning',
      error: 'bg-status-error',
    };

    const sizeClasses = {
      sm: 'h-1.5',
      md: 'h-2',
    };

    return (
      <div ref={ref} className={clsx('w-full', className)} {...props}>
        <div className={clsx('w-full overflow-hidden rounded-full bg-app-line', sizeClasses[size])}>
          <div
            className={clsx('h-full transition-all duration-300', variantClasses[variant])}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showLabel && (
          <div className="mt-1 flex justify-between text-xs text-ink-dull">
            <span>{Math.round(percentage)}%</span>
            <span>
              {value} / {max}
            </span>
          </div>
        )}
      </div>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export { ProgressBar };
