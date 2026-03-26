import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { User } from '@phosphor-icons/react';

interface ProfileAvatarProps {
  seed?: string;
  name?: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

// Simple hash function to generate deterministic colors from seed
const generateGradient = (seed: string): string => {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  const hue1 = Math.abs(hash % 360);
  const hue2 = Math.abs((hash >> 8) % 360);
  
  return `linear-gradient(135deg, hsl(${hue1}, 70%, 60%), hsl(${hue2}, 70%, 50%))`;
};

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

const ProfileAvatar = forwardRef<HTMLDivElement, ProfileAvatarProps>(
  ({ seed = '', name, imageUrl, size = 'md', className }, ref) => {
    const sizeClasses = {
      sm: 'size-6 text-xs',
      md: 'size-8 text-sm',
      lg: 'size-10 text-base',
    };

    const gradient = generateGradient(seed || name || 'default');
    const initials = name ? getInitials(name) : '';

    return (
      <div
        ref={ref}
        className={clsx(
          'relative flex shrink-0 items-center justify-center overflow-hidden rounded-full',
          sizeClasses[size],
          className
        )}
        style={!imageUrl ? { background: gradient } : undefined}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name || 'Avatar'}
            className="h-full w-full object-cover"
          />
        ) : initials ? (
          <span className="font-medium text-white">{initials}</span>
        ) : (
          <User className="size-1/2 text-white/80" />
        )}
      </div>
    );
  }
);

ProfileAvatar.displayName = 'ProfileAvatar';

export { ProfileAvatar };
