import { useCallback, type ReactNode, type MouseEvent } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  variant?: 'default' | 'alt';
  children: ReactNode;
}

export function Section({ id, title, variant = 'default', children }: SectionProps) {
  const handleMouseMove = useCallback((e: MouseEvent<HTMLHeadingElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    el.setAttribute('data-hovering', '');
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent<HTMLHeadingElement>) => {
    e.currentTarget.removeAttribute('data-hovering');
  }, []);

  return (
    <section className={`section${variant === 'alt' ? ' section-alt' : ''}`} id={id}>
      <div className="section-header">
        <h2
          className="section-title"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
