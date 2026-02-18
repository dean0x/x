import type { ReactNode } from 'react';

interface CodeBlockProps {
  title: string;
  children: ReactNode;
}

export function CodeBlock({ title, children }: CodeBlockProps) {
  return (
    <div className="code-block">
      <div className="code-block-header">
        <div className="code-block-dots">
          <span className="code-block-dot" />
          <span className="code-block-dot" />
          <span className="code-block-dot" />
        </div>
        <span className="code-block-title">{title}</span>
      </div>
      <div className="code-block-body">
        <pre>{children}</pre>
      </div>
    </div>
  );
}
