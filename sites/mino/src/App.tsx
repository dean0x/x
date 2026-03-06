import { useEffect } from 'react';
import {
  Layout,
  Hero,
  InstallBlock,
  Section,
  BentoGrid,
  DataTable,
  AnimatedTerminal,
  ClosingCTA,
  StatsBar,
} from '@cli-pages/shared';
import {
  meta,
  brandTagline,
  projectLinks,
  navLinks,
  stats,
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
    <Layout brand={meta.name} brandTagline={brandTagline} navLinks={[...navLinks]} githubUrl={meta.github} projectLinks={projectLinks}
      bottomSlot={<ClosingCTA subtitle={`Install ${meta.name} and try it in under a minute.`} installMethods={installMethods} githubUrl={meta.github} />}
    >
      <Hero {...heroData} />

      <StatsBar stats={stats} />

      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="mino" />
      </div>

      <div className="section-divider" />

      <Section id="features" title="Defense-in-depth for AI agents" variant="alt">
        <div className="animate-in">
          <BentoGrid items={features} />
        </div>
      </Section>

      <Section id="comparison" title="Why Not Dev Containers?" variant="alt">
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
