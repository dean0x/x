import { type ReactNode, useState, useEffect, useRef, useCallback } from 'react';
import { BackgroundEffects } from './BackgroundEffects';

interface NavLink {
  label: string;
  href: string;
}

interface ProjectLink {
  label: string;
  href: string;
}

interface LayoutProps {
  brand: string;
  brandTagline?: string;
  navLinks: NavLink[];
  githubUrl: string;
  projectLinks?: ProjectLink[];
  bottomSlot?: ReactNode;
  children: ReactNode;
}

export function Layout({ brand, brandTagline, navLinks, githubUrl, projectLinks, bottomSlot, children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const contentRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!isMenuOpen) return;
    window.addEventListener('scroll', closeMenu, { passive: true });
    return () => window.removeEventListener('scroll', closeMenu);
  }, [isMenuOpen, closeMenu]);

  // Scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-revealed');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = (root: Element) => {
      for (const el of root.querySelectorAll('.animate-in')) {
        observer.observe(el);
      }
    };

    const content = contentRef.current;
    if (content) {
      observeAll(content);

      // Watch for dynamically added .animate-in elements
      const mutation = new MutationObserver((mutations) => {
        for (const m of mutations) {
          for (const node of m.addedNodes) {
            if (node instanceof Element) {
              if (node.classList.contains('animate-in')) observer.observe(node);
              observeAll(node);
            }
          }
        }
      });
      mutation.observe(content, { childList: true, subtree: true });

      return () => {
        observer.disconnect();
        mutation.disconnect();
      };
    }
  }, []);

  return (
    <div className="page-wrapper">
      <BackgroundEffects />
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand" onClick={(e) => { e.preventDefault(); closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            {brand}
          </a>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </li>
          </ul>
          <button
            type="button"
            className={`nav-hamburger${isMenuOpen ? ' nav-hamburger-open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
            <span className="nav-hamburger-bar" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="nav-mobile-menu">
            <ul className="nav-mobile-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={closeMenu}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <main className="page-content" ref={contentRef}>{children}</main>

      {bottomSlot}

      <footer className="footer">
        <div className="footer-inner">
          <div>
            <div className="footer-brand-name">{brand}</div>
            {brandTagline && <div className="footer-brand-tagline">{brandTagline}</div>}
          </div>
          <div>
            <div className="footer-heading">Navigation</div>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}><a href={link.href}>{link.label}</a></li>
              ))}
              <li><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          {projectLinks && projectLinks.length > 0 && (
            <div>
              <div className="footer-heading">Project</div>
              <ul className="footer-links">
                {projectLinks.map((link) => (
                  <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a></li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="footer-bottom">
          &copy; 2025 <a href="https://github.com/dean0x" target="_blank" rel="noopener noreferrer">dean0x</a> &middot; MIT License
        </div>
      </footer>
    </div>
  );
}
