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
  commandColumns,
  commandRows,
  installMethods,
  terminalWalkthrough,
  mcpToolColumns,
  mcpToolRows,
  ctaTitle,
} from './data';

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#6366f1');
    root.style.setProperty('--accent-secondary', '#8b5cf6');
    root.style.setProperty('--font-heading', '"Outfit", var(--font-sans)');
  }, []);

  return (
    <Layout brand={meta.name} brandTagline={brandTagline} navLinks={[...navLinks]} githubUrl={meta.github} projectLinks={projectLinks}
      bottomSlot={<ClosingCTA title={ctaTitle} subtitle={`Install ${meta.name} and try it in under a minute.`} installMethods={installMethods} githubUrl={meta.github} />}
    >
      <Hero {...heroData} />

      <StatsBar stats={stats} />

      <div className="animate-in delay-2">
        <InstallBlock methods={installMethods} />
      </div>

      <div className="terminal-showcase animate-in delay-3">
        <AnimatedTerminal lines={terminalWalkthrough} title="backbeat" />
      </div>

      <div className="section-divider" />

      <Section id="features" title="Everything you need for task orchestration" variant="alt">
        <div className="animate-in">
          <BentoGrid items={features} />
        </div>
      </Section>

      <Section id="commands" title="Commands">
        <div className="animate-in">
          <DataTable columns={commandColumns} rows={commandRows} />
        </div>
      </Section>

      <Section id="mcp-tools" title="MCP Tools" variant="alt">
        <div className="animate-in">
          <DataTable columns={mcpToolColumns} rows={mcpToolRows} />
        </div>
      </Section>
    </Layout>
  );
}
