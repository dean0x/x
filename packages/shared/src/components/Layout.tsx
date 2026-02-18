import type { ReactNode, ComponentType } from 'react';
import type { LucideProps } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface LayoutProps {
  brand: string;
  brandIcon?: ComponentType<LucideProps>;
  navLinks: NavLink[];
  githubUrl: string;
  children: ReactNode;
}

export function Layout({ brand, brandIcon: BrandIcon, navLinks, githubUrl, children }: LayoutProps) {
  return (
    <div className="page-wrapper">
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-brand">
            {BrandIcon && <span className="nav-brand-icon"><BrandIcon size={20} strokeWidth={1.5} /></span>}
            {brand}
          </div>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="page-content">{children}</main>

      <footer className="footer">
        Built by <a href="https://github.com/dean0x" target="_blank" rel="noopener noreferrer">dean0x</a>
      </footer>
    </div>
  );
}
