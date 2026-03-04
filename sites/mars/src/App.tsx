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
  terminalWalkthrough,
} from './data';

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#e04040');
    root.style.setProperty('--accent-secondary', '#e87040');
    root.style.setProperty('--font-heading', '"Outfit", var(--font-sans)');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />
      
      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="mars" />
      </div>

      <Section id="features" title="Everything you need for multi-repo">
        <div className="animate-in">
          <BentoGrid items={features} />
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
