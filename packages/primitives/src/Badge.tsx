import { clsx } from 'clsx';
import { type VariantProps, cva } from 'class-variance-authority';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-accent/10 text-accent',
        secondary: 'border-transparent bg-app-box text-ink-dull',
        destructive: 'border-transparent bg-status-error/10 text-status-error',
        outline: 'text-ink',
        success: 'border-transparent bg-status-success/10 text-status-success',
        warning: 'border-transparent bg-status-warning/10 text-status-warning',
      },
      size: {
        default: 'px-2.5 py-0.5',
        sm: 'px-2 py-0.5 text-[10px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={clsx(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
