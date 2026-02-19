import { useEffect } from 'react';
import {
  Layout,
  Hero,
  InstallBlock,
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
  installMethods,
  workflowSteps,
} from './data';

export function App() {
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', '#3080e0');
    root.style.setProperty('--accent-secondary', '#20b0e0');
  }, []);

  return (
    <Layout brand={meta.name} navLinks={[...navLinks]} githubUrl={meta.github}>
      <Hero {...heroData} />
      <InstallBlock methods={installMethods} />

      <Section id="features" title="Features">
        <FeatureGrid features={features} />
      </Section>

      <Section id="commands" title="Commands">
        <CommandTable commands={commands} />
      </Section>

      <Section id="workflow" title="How It Works">
        <WorkflowSteps steps={workflowSteps} />
      </Section>
    </Layout>
  );
}
