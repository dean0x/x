import { useEffect } from 'react';
import {
  Layout,
  Hero,
  Section,
  FeatureGrid,
  CommandTable,
  WorkflowSteps,
} from '@cli-pages/shared';
import {
  meta,
  navLinks,
  heroData,
  features,
  comparison,
  commands,
  workflowSteps,
} from './data';

const tableStyles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
  },
  th: {
    padding: '14px 20px',
    textAlign: 'left' as const,
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--text-secondary)',
    background: 'rgba(255, 255, 255, 0.02)',
    borderBottom: '1px solid var(--border)',
  },
  thAccent: {
    padding: '14px 20px',
    textAlign: 'left' as const,
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--accent)',
    background: 'rgba(255, 255, 255, 0.02)',
    borderBottom: '1px solid var(--border)',
  },
  td: {
    padding: '12px 20px',
    fontSize: '0.85rem',
    color: 'var(--text-secondary)',
    borderBottom: '1px solid var(--border)',
  },
  tdAspect: {
    padding: '12px 20px',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: 'var(--text-primary)',
    borderBottom: '1px solid var(--border)',
    whiteSpace: 'nowrap' as const,
  },
  tdAccent: {
    padding: '12px 20px',
    fontSize: '0.85rem',
    color: 'var(--accent)',
    borderBottom: '1px solid var(--border)',
    fontWeight: 500,
  },
};

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#30b878');
    root.style.setProperty('--accent-secondary', '#20a0a0');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <Section id="features" title="Features">
        <FeatureGrid features={features} />
      </Section>

      <Section id="comparison" title="Why Not Dev Containers?">
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyles.table}>
            <thead>
              <tr>
                <th style={tableStyles.th}>Aspect</th>
                <th style={tableStyles.th}>Dev Containers</th>
                <th style={tableStyles.thAccent}>Mino</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row, i) => (
                <tr key={row.aspect} style={i === comparison.length - 1 ? { borderBottom: 'none' } : undefined}>
                  <td style={tableStyles.tdAspect}>{row.aspect}</td>
                  <td style={tableStyles.td}>{row.devContainers}</td>
                  <td style={tableStyles.tdAccent}>{row.mino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
