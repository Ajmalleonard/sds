import { clsx } from 'clsx';
import { type VariantProps, cva } from 'class-variance-authority';

const loaderVariants = cva(
  'rounded-full',
  {
    variants: {
      variant: {
        default: 'bg-accent',
        primary: 'bg-ink',
        success: 'bg-status-success',
        warning: 'bg-status-warning',
        destructive: 'bg-status-error',
        white: 'bg-white',
      },
      size: {
        sm: 'w-[10px]',
        md: 'w-[15px]',
        lg: 'w-[20px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface LoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof loaderVariants> {}

function Loader({ className, variant, size, ...props }: LoaderProps) {
  return (
    <div
      className={clsx(loaderVariants({ variant, size }), className)}
      {...props}
    />
  );
}

const loaderKeyframes = `
@keyframes loader {
  0% {
    box-shadow: 20px 0 var(--current-color), -20px 0 rgb(from var(--current-color) r g b / 0.1);
    background: var(--current-color);
  }
  33% {
    box-shadow: 20px 0 var(--current-color), -20px 0 rgb(from var(--current-color) r g b / 0.1);
    background: rgb(from var(--current-color) r g b / 0.1);
  }
  66% {
    box-shadow: 20px 0 rgb(from var(--current-color) r g b / 0.1), -20px 0 var(--current-color);
    background: rgb(from var(--current-color) r g b / 0.1);
  }
  100% {
    box-shadow: 20px 0 rgb(from var(--current-color) r g b / 0.1), -20px 0 var(--current-color);
    background: var(--current-color);
  }
}
`;

const variantColors: Record<NonNullable<LoaderProps['variant']>, string> = {
  default: 'hsl(208, 100%, 57%)',
  primary: 'hsl(235, 35%, 92%)',
  success: 'hsl(142, 76%, 36%)',
  warning: 'hsl(38, 92%, 50%)',
  destructive: 'hsl(0, 84%, 60%)',
  white: 'hsl(0, 0%, 100%)',
};

export function LoaderIcon({ className, variant = 'default', size = 'md', ...props }: LoaderProps) {
  const color = variantColors[variant!];

  return (
    <>
      <style>{loaderKeyframes}</style>
      <div
        className={clsx(
          'aspect-square animate-[loader_1s_infinite_linear_alternate]',
          {
            'w-[10px]': size === 'sm',
            'w-[15px]': size === 'md',
            'w-[20px]': size === 'lg',
          },
          className
        )}
        style={{ '--current-color': color } as React.CSSProperties}
        {...props}
      />
    </>
  );
}

export { Loader, loaderVariants };