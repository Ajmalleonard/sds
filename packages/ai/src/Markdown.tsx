import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { clsx } from 'clsx';
import { forwardRef } from 'react';

export interface MarkdownProps {
  content: string;
  className?: string;
}

const Markdown = forwardRef<HTMLDivElement, MarkdownProps>(
  ({ content, className }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'prose prose-invert max-w-none',
          'prose-p:text-ink prose-p:my-2',
          'prose-headings:text-ink prose-headings:font-semibold',
          'prose-a:text-accent prose-a:no-underline hover:prose-a:underline',
          'prose-strong:text-ink prose-strong:font-semibold',
          'prose-code:text-accent prose-code:bg-app-box prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm',
          'prose-pre:bg-app-box prose-pre:border prose-pre:border-app-line',
          'prose-ul:text-ink prose-ol:text-ink',
          'prose-li:marker:text-ink-dull',
          'prose-blockquote:border-l-accent prose-blockquote:text-ink-dull',
          'prose-hr:border-app-line',
          'prose-table:border-app-line prose-th:border-app-line prose-td:border-app-line',
          'prose-th:text-ink-dull prose-th:font-medium',
          className
        )}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
    );
  }
);

Markdown.displayName = 'Markdown';

export { Markdown };
