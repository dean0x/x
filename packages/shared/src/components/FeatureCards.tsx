import { useCallback, type MouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';

export interface FeatureCardItem {
  icon?: LucideIcon;
  title: string;
  desc: string;
}

interface FeatureCardsProps {
  items: FeatureCardItem[];
  columns?: 2 | 3 | 4;
}

export function FeatureCards({ items, columns = 2 }: FeatureCardsProps) {
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    card.setAttribute('data-hovering', '');
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.removeAttribute('data-hovering');
  }, []);

  return (
    <div className={`feature-cards feature-cards-${columns}`}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`feature-card animate-in delay-${(idx % 3) + 1}`}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {item.icon && (
            <div className="feature-card-icon">
              <item.icon size={28} />
            </div>
          )}
          <h3 className="feature-card-title">{item.title}</h3>
          <p className="feature-card-desc">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
