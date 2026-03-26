// File system types for @spaceui/explorer

export type FileKind = 
  | 'document'
  | 'image'
  | 'video'
  | 'audio'
  | 'archive'
  | 'executable'
  | 'code'
  | 'unknown';

export interface FileInfo {
  id: string;
  name: string;
  path: string;
  kind: FileKind;
  size: number;
  modifiedAt: Date;
  createdAt: Date;
  thumbnailUrl?: string;
  isDirectory: boolean;
  extension?: string;
  tags?: string[];
  metadata?: Record<string, unknown>;
}

export interface TagInfo {
  id: string;
  name: string;
  color: string;
}

export type ViewMode = 'grid' | 'list';

export type SortField = 'name' | 'size' | 'modifiedAt' | 'createdAt' | 'kind';
export type SortDirection = 'asc' | 'desc';

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

export interface SelectionState {
  selectedIds: Set<string>;
  lastSelectedId: string | null;
}
