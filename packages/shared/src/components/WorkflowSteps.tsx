import type { ReactNode } from 'react';
import { CodeBlock } from './CodeBlock';

interface WorkflowStep {
  title: string;
  desc: string;
  code?: string;
  codeTitle?: string;
}

interface WorkflowStepsProps {
  steps: WorkflowStep[];
}

function formatLine(line: string, isTerminal: boolean): ReactNode {
  if (line.startsWith('#')) {
    return <span className="code-comment">{line}</span>;
  }
  const prefix = isTerminal ? '$ ' : '> ';
  return (
    <>
      <span className="code-accent">{prefix}</span>{line}
    </>
  );
}

export function WorkflowSteps({ steps }: WorkflowStepsProps) {
  const blockTitle = steps[0]?.codeTitle ?? 'terminal';

  const lines: ReactNode[] = [];

  steps.forEach((step, i) => {
    if (i > 0) lines.push('\n');
    lines.push(<span className="code-comment">{`# Step ${i + 1}: ${step.title}`}</span>);
    lines.push('\n');
    lines.push(<span className="code-comment">{`# ${step.desc}`}</span>);
    if (step.code) {
      const isTerminal = step.codeTitle === 'terminal' || !step.codeTitle;
      step.code.split('\n').forEach((codeLine) => {
        lines.push('\n');
        lines.push(formatLine(codeLine, isTerminal));
      });
    }
  });

  return (
    <CodeBlock title={blockTitle}>
      {lines}
    </CodeBlock>
  );
}
