import { useState, useEffect, useRef, useCallback } from 'react';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

interface ParsedStat {
  numeric: number | null;
  suffix: string;
  hasDecimals: boolean;
}

function parseStatValue(value: string): ParsedStat {
  const match = value.match(/^([+-]?\d+(?:\.\d+)?)(.*)/);
  if (!match) return { numeric: null, suffix: '', hasDecimals: false };
  const num = parseFloat(match[1]);
  return {
    numeric: num,
    suffix: match[2],
    hasDecimals: match[1].includes('.'),
  };
}

function useCountUp(target: number | null, hasDecimals: boolean, isVisible: boolean): string | null {
  const [current, setCurrent] = useState<number | null>(null);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    if (target === null || target === 0) return;

    const duration = Math.min(1200, Math.max(400, target * 80));
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);

      if (progress >= 1) {
        setCurrent(target);
        return;
      }

      setCurrent(eased * target);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (!isVisible || target === null) return;

    // Skip animation for prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      setCurrent(target);
      return;
    }

    if (target === 0) {
      setCurrent(0);
      return;
    }

    animate();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible, target, animate]);

  if (current === null) return null;
  if (hasDecimals) return current.toFixed(1);
  return Math.round(current).toString();
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const parsed = parseStatValue(stat.value);
  const animatedValue = useCountUp(parsed.numeric, parsed.hasDecimals, isVisible);
  const isTextOnly = parsed.numeric === null;

  const displayValue = isTextOnly
    ? stat.value
    : (animatedValue ?? '0') + parsed.suffix;

  return (
    <div ref={ref} className="stats-bar-item">
      <span className={`stats-bar-value gradient-text${isTextOnly ? (isVisible ? ' stat-fade-visible' : ' stat-fade') : ''}`}>
        {displayValue}
      </span>
      <span className="stats-bar-label">{stat.label}</span>
    </div>
  );
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="stats-bar">
      {stats.map((stat, i) => (
        <StatItem key={i} stat={stat} />
      ))}
    </div>
  );
}
