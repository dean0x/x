import { useCallback } from 'react';
import type { ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

interface Feature {
  icon: ComponentType<LucideProps>;
  title: string;
  desc: string;
}

interface FeatureGridProps {
  features: Feature[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${(e.clientX - rect.left)}px`);
    card.style.setProperty('--mouse-y', `${(e.clientY - rect.top)}px`);
    card.setAttribute('data-hovering', '');
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.removeAttribute('data-hovering');
  }, []);

  return (
    <div className="feature-grid">
      {features.map((f) => (
        <div
          key={f.title}
          className="feature-card"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="feature-icon">
            <f.icon size={24} strokeWidth={1.5} />
          </div>
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-desc">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
