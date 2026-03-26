import * as SwitchPrimitive from '@radix-ui/react-switch';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

const Switch = forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> & {
    size?: 'sm' | 'md' | 'lg';
  }
>(({ className, size = 'md', ...props }, ref) => {
  const sizeClasses = {
    sm: 'w-8 h-4',
    md: 'w-10 h-5',
    lg: 'w-12 h-6',
  };

  const thumbSizes = {
    sm: 'size-3 data-[state=checked]:translate-x-4',
    md: 'size-4 data-[state=checked]:translate-x-5',
    lg: 'size-5 data-[state=checked]:translate-x-6',
  };

  return (
    <SwitchPrimitive.Root
      ref={ref}
      className={clsx(
        'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:bg-accent data-[state=unchecked]:bg-app-line',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={clsx(
          'pointer-events-none block rounded-full bg-white shadow-lg ring-0 transition-transform',
          'translate-x-0.5',
          thumbSizes[size]
        )}
      />
    </SwitchPrimitive.Root>
  );
});

Switch.displayName = SwitchPrimitive.Root.displayName;

export { Switch };
