import { useCallback, type MouseEvent } from 'react';
import { LucideIcon } from 'lucide-react';

export interface BentoItemProps {
  icon?: LucideIcon;
  title: string;
  desc: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface BentoGridProps {
  items: BentoItemProps[];
}

export function BentoGrid({ items }: BentoGridProps) {
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mouse-x', `${(e.clientX - rect.left)}px`);
    card.style.setProperty('--mouse-y', `${(e.clientY - rect.top)}px`);
    card.setAttribute('data-hovering', '');
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.removeAttribute('data-hovering');
  }, []);

  return (
    <div className="bento-grid">
      {items.map((item, idx) => {
        const sizeClass = `bento-item-${item.size || 'sm'}`;
        const animationClass = `animate-in delay-${(idx % 3) + 1}`;

        return (
          <div
            key={idx}
            className={`bento-item ${sizeClass} ${animationClass} ${item.className || ''}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {item.icon && (
              <div className="feature-icon">
                <item.icon size={24} />
              </div>
            )}
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
