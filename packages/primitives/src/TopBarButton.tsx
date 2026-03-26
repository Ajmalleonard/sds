import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface TopBarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  icon: React.ComponentType<{ className?: string }>;
}

const TopBarButton = forwardRef<HTMLButtonElement, TopBarButtonProps>(
  ({ className, active, icon: Icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex h-8 items-center gap-1.5 rounded-md px-2 text-sm font-medium transition-colors',
          active
            ? 'bg-app-selected text-ink'
            : 'text-ink-dull hover:bg-app-hover hover:text-ink',
          className
        )}
        {...props}
      >
        <Icon className="size-4" />
        {children}
      </button>
    );
  }
);

TopBarButton.displayName = 'TopBarButton';

interface TopBarButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TopBarButtonGroup = forwardRef<HTMLDivElement, TopBarButtonGroupProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('inline-flex items-center gap-1', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TopBarButtonGroup.displayName = 'TopBarButtonGroup';

export { TopBarButton, TopBarButtonGroup };
