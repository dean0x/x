import { InstallBlock } from './InstallBlock';

interface InstallOption {
  label: string;
  command: string;
}

interface ClosingCTAProps {
  subtitle: string;
  installMethods: InstallOption[];
  githubUrl: string;
}

export function ClosingCTA({ subtitle, installMethods, githubUrl }: ClosingCTAProps) {
  return (
    <div className="closing-cta">
      <div className="section-divider" />
      <div className="closing-cta-inner">
        <h2 className="closing-cta-title">Ready to get started?</h2>
        <p className="closing-cta-subtitle">{subtitle}</p>
        <InstallBlock methods={installMethods} />
        <a className="closing-cta-github" href={githubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub &rarr;
        </a>
      </div>
    </div>
  );
}
