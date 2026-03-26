import * as SliderPrimitive from '@radix-ui/react-slider';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & {
    showMarks?: boolean;
  }
>(({ className, showMarks, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={clsx(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-app-line">
      <SliderPrimitive.Range className="absolute h-full bg-accent" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className={clsx(
        'block size-4 rounded-full border border-accent/50 bg-accent shadow transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        'disabled:pointer-events-none disabled:opacity-50'
      )}
    />
    {showMarks && props.max && (
      <div className="absolute top-3 left-0 right-0 flex justify-between text-xs text-ink-faint">
        {Array.from({ length: props.max + 1 }).map((_, i) => (
          <span key={i}>{i}</span>
        ))}
      </div>
    )}
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
