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
  comparison,
  commandColumns,
  commandRows,
  installMethods,
  terminalWalkthrough,
} from './data';

const comparisonColumns = [
  { key: 'aspect', header: 'Aspect', highlight: 'primary' as const },
  { key: 'devContainers', header: 'Dev Containers' },
  { key: 'mino', header: 'Mino', highlight: 'accent' as const },
];

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#30b878');
    root.style.setProperty('--accent-secondary', '#20a0a0');
    root.style.setProperty('--font-heading', '"Outfit", var(--font-sans)');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="mino" />
      </div>

      <Section id="features" title="Defense-in-depth for AI agents">
        <div className="animate-in">
          <BentoGrid items={features} />
        </div>
      </Section>

      <Section id="comparison" title="Why Not Dev Containers?">
        <div className="animate-in">
          <DataTable columns={comparisonColumns} rows={comparison} title="mino vs dev containers" />
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
