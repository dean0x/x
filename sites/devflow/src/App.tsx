import { useEffect } from 'react';
import {
  Layout,
  Hero,
  InstallBlock,
  Section,
  BentoGrid,
  CommandTable,
  AnimatedTerminal,
} from '@cli-pages/shared';
import {
  meta,
  navLinks,
  heroData,
  features,
  commands,
  installMethods,
  terminalWalkthrough,
} from './data';

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#3080e0');
    root.style.setProperty('--accent-secondary', '#20b0e0');
    root.style.setProperty('--font-heading', '"Outfit", var(--font-sans)');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="claude code" />
      </div>

      <Section id="features" title="Structured workflows for agent teams">
        <div className="animate-in">
          <BentoGrid items={features} />
        </div>
      </Section>

      <Section id="commands" title="Commands">
        <div className="animate-in">
          <CommandTable commands={commands} />
        </div>
      </Section>
    </Layout>
  );
}
