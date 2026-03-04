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
  commandColumns,
  commandRows,
  installMethods,
  threatComparison,
  terminalWalkthrough,
} from './data';

const threatColumns = [
  { key: 'aspect', header: 'Aspect', highlight: 'primary' as const },
  { key: 'without', header: 'Without Silo' },
  { key: 'with', header: 'With Silo', highlight: 'accent' as const },
];

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#8060e0');
    root.style.setProperty('--accent-secondary', '#6040c0');
    root.style.setProperty('--font-heading', '"Outfit", var(--font-sans)');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="silo" />
      </div>

      <Section id="features" title="OS-enforced protection for secrets">
        <div className="animate-in">
          <BentoGrid items={features} />
        </div>
      </Section>

      <Section id="threat-model" title="Threat Model">
        <div className="animate-in">
          <DataTable columns={threatColumns} rows={threatComparison} title="threat model comparison" />
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
