import { clsx } from 'clsx';
import { forwardRef, useState, useCallback, useRef, useEffect } from 'react';

interface ResizablePanelGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
}

const ResizablePanelGroup = forwardRef<HTMLDivElement, ResizablePanelGroupProps>(
  ({ direction = 'horizontal', className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'flex',
          direction === 'horizontal' ? 'flex-row' : 'flex-col',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ResizablePanelGroup.displayName = 'ResizablePanelGroup';

interface ResizablePanelProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  resizable?: boolean;
  onResize?: (size: number) => void;
}

const ResizablePanel = forwardRef<HTMLDivElement, ResizablePanelProps>(
  ({ defaultSize = 50, minSize = 10, maxSize = 90, resizable = true, onResize, className, children, ...props }, forwardedRef) => {
    const [size, setSize] = useState(defaultSize);
    const [isDragging, setIsDragging] = useState(false);
    const panelRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = useCallback(() => {
      if (!resizable) return;
      setIsDragging(true);
    }, [resizable]);

    useEffect(() => {
      if (!isDragging) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (!panelRef.current?.parentElement) return;
        
        const parent = panelRef.current.parentElement;
        const rect = parent.getBoundingClientRect();
        const isHorizontal = parent.classList.contains('flex-row');
        
        let newSize: number;
        if (isHorizontal) {
          newSize = ((e.clientX - rect.left) / rect.width) * 100;
        } else {
          newSize = ((e.clientY - rect.top) / rect.height) * 100;
        }
        
        newSize = Math.max(minSize, Math.min(maxSize, newSize));
        setSize(newSize);
        onResize?.(newSize);
      };

      const handleMouseUp = () => {
        setIsDragging(false);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }, [isDragging, minSize, maxSize, onResize]);

    const isHorizontal = panelRef.current?.parentElement?.classList.contains('flex-row') ?? true;

    return (
      <div
        ref={(node) => {
          panelRef.current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={clsx('relative flex', className)}
        style={{ flex: `0 0 ${size}%` }}
        {...props}
      >
        {children}
        {resizable && (
          <div
            className={clsx(
              'absolute z-10 bg-accent/0 hover:bg-accent/50 transition-colors',
              isHorizontal
                ? 'right-0 top-0 bottom-0 w-1 cursor-col-resize'
                : 'bottom-0 left-0 right-0 h-1 cursor-row-resize',
              isDragging && 'bg-accent'
            )}
            onMouseDown={handleMouseDown}
          />
        )}
      </div>
    );
  }
);

ResizablePanel.displayName = 'ResizablePanel';

export { ResizablePanelGroup, ResizablePanel };
