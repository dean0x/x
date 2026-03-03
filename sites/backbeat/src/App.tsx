import { useEffect } from 'react';
import {
  Layout,
  Hero,
  InstallBlock,
  Section,
  BentoGrid,
  CommandTable,
  DataTable,
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
  mcpToolColumns,
  mcpToolRows,
} from './data';

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#6366f1');
    root.style.setProperty('--accent-secondary', '#8b5cf6');
    root.style.setProperty('--font-heading', '"Outfit", var(--font-sans)');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="backbeat" />
      </div>

      <Section id="features" title="Everything you need for task orchestration">
        <div className="animate-in">
          <BentoGrid items={features} />
        </div>
      </Section>

      <Section id="mcp-tools" title="MCP Tools">
        <div className="animate-in">
          <DataTable columns={mcpToolColumns} rows={mcpToolRows} />
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
