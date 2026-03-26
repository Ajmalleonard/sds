import { clsx } from 'clsx';
import { MagnifyingGlass } from '@phosphor-icons/react';
import { forwardRef } from 'react';

export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onClear?: () => void;
  loading?: boolean;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onClear, loading, ...props }, ref) => {
    return (
      <div className={clsx('relative flex items-center', className)}>
        <MagnifyingGlass className="absolute left-3 size-4 text-ink-faint" />
        <input
          ref={ref}
          type="search"
          className={clsx(
            'flex h-10 w-full rounded-lg border border-app-line bg-app-box pl-10 pr-4 text-sm text-ink',
            'placeholder:text-ink-faint',
            'focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent',
            'disabled:cursor-not-allowed disabled:opacity-50'
          )}
          {...props}
        />
        {loading && (
          <span className="absolute right-3 inline-block size-4 animate-spin rounded-full border-2 border-accent border-t-transparent" />
        )}
      </div>
    );
  }
);

SearchBar.displayName = 'SearchBar';

export { SearchBar };
