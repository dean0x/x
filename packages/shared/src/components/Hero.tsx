import { useRef, useCallback } from 'react';
import gsap from 'gsap';

interface HeroAction {
  label: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface HeroProps {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  actions: HeroAction[];
}

export function Hero({ badge, title, titleAccent, subtitle, actions }: HeroProps) {
  const prefersReducedMotion = useRef(
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion.current) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const deltaX = e.clientX - (rect.left + rect.width / 2);
    const deltaY = e.clientY - (rect.top + rect.height / 2);
    gsap.to(el, { x: deltaX * 0.05, y: deltaY * 0.05, duration: 0.3, ease: 'power2.out', overwrite: true });
  }, []);

  const handleMouseLeave = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (prefersReducedMotion.current) return;
    gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.3)', overwrite: true });
  }, []);

  return (
    <section className="hero">
      <span className="hero-badge">{badge}</span>
      <h1 className="hero-title">
        {title} <span className="gradient-text">{titleAccent}</span>
      </h1>
      <p className="hero-subtitle">{subtitle}</p>
      <div className="hero-actions">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            className={`btn btn-${action.variant}`}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {action.label}
          </a>
        ))}
      </div>
    </section>
  );
}
