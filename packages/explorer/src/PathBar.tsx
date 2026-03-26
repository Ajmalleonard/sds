import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { CaretRight, House } from '@phosphor-icons/react';
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@spaceui/primitives';

interface PathBarProps {
  path: string[];
  onNavigate: (index: number) => void;
  homeLabel?: string;
  className?: string;
}

const PathBar = forwardRef<HTMLDivElement, PathBarProps>(
  ({ path, onNavigate, homeLabel = 'Home', className }, ref) => {
    const visibleSegments = path.length > 4 ? [...path.slice(0, 1), '...', ...path.slice(-2)] : path;
    const hasHidden = path.length > 4;

    return (
      <div
        ref={ref}
        className={clsx(
          'flex items-center gap-1 text-sm',
          className
        )}
      >
        <Button
          variant="ghost"
          size="sm"
          className="h-7 gap-1 px-2"
          onClick={() => onNavigate(-1)}
        >
          <House className="size-4" />
          <span className="hidden sm:inline">{homeLabel}</span>
        </Button>

        {path.length > 0 && (
          <>
            <CaretRight className="size-3 text-ink-faint" />

            {hasHidden ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-7 px-2">
                    ...
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {path.slice(1, -2).map((segment, index) => (
                    <DropdownMenuItem
                      key={index + 1}
                      onClick={() => onNavigate(index + 1)}
                    >
                      {segment}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : null}

            {visibleSegments.map((segment, index) => {
              if (segment === '...') return null;

              const actualIndex = hasHidden
                ? index === 0
                  ? 0
                  : index === 1
                  ? -1
                  : path.length - (visibleSegments.length - index)
                : index;

              const isLast = index === visibleSegments.length - 1;

              return (
                <div key={actualIndex} className="flex items-center">
                  <Button
                    variant={isLast ? 'secondary' : 'ghost'}
                    size="sm"
                    className={clsx('h-7 px-2 max-w-[120px] truncate', isLast && 'font-medium')}
                    onClick={() => onNavigate(actualIndex)}
                  >
                    {segment}
                  </Button>
                  {!isLast && <CaretRight className="size-3 text-ink-faint" />}
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
);

PathBar.displayName = 'PathBar';

export { PathBar };
export type { PathBarProps };
