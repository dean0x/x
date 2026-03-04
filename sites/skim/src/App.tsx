import { useEffect } from 'react';
import {
  Layout,
  Hero,
  InstallBlock,
  Section,
  BentoGrid,
  DataTable,
  AnimatedTerminal,
} from '@cli-pages/shared';
import {
  meta,
  navLinks,
  heroData,
  features,
  modesComparison,
  commandColumns,
  commandRows,
  installMethods,
  terminalWalkthrough,
} from './data';

const modesColumns = [
  { key: 'mode', header: 'Mode', highlight: 'primary' as const },
  { key: 'tokens', header: 'Tokens' },
  { key: 'reduction', header: 'Reduction', highlight: 'accent' as const },
  { key: 'useCase', header: 'Use Case' },
];

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#e87040');
    root.style.setProperty('--accent-secondary', '#f0a030');
    root.style.setProperty('--font-heading', '"Outfit", var(--font-sans)');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="skim" />
      </div>

      <Section id="features" title="The AI-first code reader">
        <div className="animate-in">
          <BentoGrid items={features} />
        </div>
      </Section>

      <Section id="modes" title="Transformation Modes">
        <div className="animate-in">
          <DataTable columns={modesColumns} rows={modesComparison} title="token comparison — real codebase (3,000 lines)" />
        </div>
      </Section>

      <Section id="commands" title="Commands">
        <div className="animate-in">
          <DataTable columns={commandColumns} rows={commandRows} />
        </div>
      </Section>
    </Layout>
  );
}
