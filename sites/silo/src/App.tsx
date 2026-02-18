import { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import {
  Layout,
  Hero,
  InstallBlock,
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
  installMethods,
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
    <Layout brand={meta.name} brandIcon={ShieldCheck} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />
      <InstallBlock methods={installMethods} />

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
