import { clsx } from 'clsx';
import { forwardRef } from 'react';

interface CircularProgressProps extends React.HTMLAttributes<SVGSVGElement> {
  value: number;
  size?: number;
  strokeWidth?: number;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

const CircularProgress = forwardRef<SVGSVGElement, CircularProgressProps>(
  ({ value, size = 40, strokeWidth = 4, variant = 'default', className, ...props }, ref) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    const variantClasses = {
      default: 'stroke-accent',
      success: 'stroke-status-success',
      warning: 'stroke-status-warning',
      error: 'stroke-status-error',
    };

    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        className={clsx('rotate-[-90deg]', className)}
        {...props}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-app-line"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className={clsx('transition-all duration-300', variantClasses[variant])}
        />
      </svg>
    );
  }
);

CircularProgress.displayName = 'CircularProgress';

export { CircularProgress };
