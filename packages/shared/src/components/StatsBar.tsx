interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  return (
    <div className="stats-bar">
      {stats.map((stat, i) => (
        <div key={i} className="stats-bar-item">
          <span className="stats-bar-value gradient-text">{stat.value}</span>
          <span className="stats-bar-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
