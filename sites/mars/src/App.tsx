import { useEffect } from 'react';
import {
  Layout,
  Hero,
  Section,
  FeatureGrid,
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
} from './data';

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#e04040');
    root.style.setProperty('--accent-secondary', '#e87040');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />

      <Section id="features" title="Features">
        <FeatureGrid features={features} />
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
