import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { File, Folder, Image, Video, Music, FileArchive, FileCode, FileText, Question } from '@phosphor-icons/react';
import type { FileKind } from '../types';

interface KindIconProps {
  kind: FileKind;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const kindIcons: Record<FileKind, React.ComponentType<{ className?: string }>> = {
  document: FileText,
  image: Image,
  video: Video,
  audio: Music,
  archive: FileArchive,
  executable: File,
  code: FileCode,
  unknown: Question,
};

const kindColors: Record<FileKind, string> = {
  document: 'text-accent',
  image: 'text-status-warning',
  video: 'text-status-error',
  audio: 'text-accent',
  archive: 'text-ink-dull',
  executable: 'text-status-success',
  code: 'text-accent',
  unknown: 'text-ink-faint',
};

const sizeClasses = {
  sm: 'size-4',
  md: 'size-5',
  lg: 'size-6',
};

const KindIcon = forwardRef<SVGSVGElement, KindIconProps>(
  ({ kind, className, size = 'md' }, ref) => {
    const Icon = kindIcons[kind] || Question;

    return (
      <Icon
        ref={ref}
        className={clsx(sizeClasses[size], kindColors[kind], className)}
      />
    );
  }
);

KindIcon.displayName = 'KindIcon';

export { KindIcon };
export type { KindIconProps };
