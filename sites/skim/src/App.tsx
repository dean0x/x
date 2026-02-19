import { useEffect } from 'react';
import {
  Layout,
  Hero,
  Section,
  FeatureGrid,
  CodeBlock,
  CommandTable,
  WorkflowSteps,
} from '@cli-pages/shared';
import {
  meta,
  navLinks,
  heroData,
  features,
  modesComparison,
  commands,
  workflowSteps,
} from './data';

const tableStyles = {
  wrapper: {
    overflowX: 'auto' as const,
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
  },
  th: {
    textAlign: 'left' as const,
    padding: '12px 16px',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text-muted)',
    fontWeight: 600,
    fontSize: '0.75rem',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
  },
  td: {
    padding: '14px 16px',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text-secondary)',
  },
  modeCell: {
    padding: '14px 16px',
    borderBottom: '1px solid var(--border)',
    color: 'var(--text-primary)',
    fontWeight: 600,
  },
  reductionCell: {
    padding: '14px 16px',
    borderBottom: '1px solid var(--border)',
    color: 'var(--accent)',
    fontWeight: 600,
  },
};

function ModesTable() {
  return (
    <div style={tableStyles.wrapper}>
      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th style={tableStyles.th}>Mode</th>
            <th style={tableStyles.th}>Tokens</th>
            <th style={tableStyles.th}>Reduction</th>
            <th style={tableStyles.th}>Use Case</th>
          </tr>
        </thead>
        <tbody>
          {modesComparison.map((row) => (
            <tr key={row.mode}>
              <td style={tableStyles.modeCell}>{row.mode}</td>
              <td style={tableStyles.td}>{row.tokens}</td>
              <td style={tableStyles.reductionCell}>{row.reduction}</td>
              <td style={tableStyles.td}>{row.useCase}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#e87040');
    root.style.setProperty('--accent-secondary', '#f0a030');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <Section id="features" title="Features">
        <FeatureGrid features={features} />
      </Section>

      <Section id="modes" title="Transformation Modes">
        <CodeBlock title="token comparison — real codebase (3,000 lines)">
          <ModesTable />
        </CodeBlock>
      </Section>

      <Section id="workflow" title="How It Works">
        <WorkflowSteps steps={workflowSteps} />
      </Section>

      <Section id="commands" title="Commands">
        <CommandTable commands={commands} />
      </Section>
    </Layout>
  );
}
