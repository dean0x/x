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
  commands,
  workflowSteps,
  threatModelBefore,
  threatModelAfter,
} from './data';

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#8060e0');
    root.style.setProperty('--accent-secondary', '#6040c0');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <Section id="features" title="Features">
        <FeatureGrid features={features} />
      </Section>

      <Section id="threat-model" title="Threat Model">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '16px' }}>
          <CodeBlock title="Without Silo">{threatModelBefore}</CodeBlock>
          <CodeBlock title="With Silo">{threatModelAfter}</CodeBlock>
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
