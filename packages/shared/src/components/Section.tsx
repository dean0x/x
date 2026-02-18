import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
      </div>
      {children}
    </section>
  );
}
