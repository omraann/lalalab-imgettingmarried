import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Proposal', href: '/proposal' },
  { label: 'Vows', href: '/vows' },
  { label: 'Love Letter', href: '/love-letter' },
  { label: 'Ring Advisor', href: '/ring-advisor' },
  { label: 'Date Ideas', href: '/date-ideas' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 24,
              fontWeight: 700,
              color: 'var(--color-rose)',
              letterSpacing: '-0.02em',
            }}
          >
            Forever
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                textDecoration: 'none',
                padding: '6px 14px',
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 500,
                color: location.pathname === link.href ? 'var(--color-rose)' : 'var(--color-muted)',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                if (location.pathname !== link.href) {
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-text)';
                }
              }}
              onMouseLeave={(e) => {
                if (location.pathname !== link.href) {
                  (e.currentTarget as HTMLElement).style.color = 'var(--color-muted)';
                }
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/proposal" className="btn-primary" style={{ marginLeft: 8, fontSize: 14, padding: '8px 20px', textDecoration: 'none' }}>
            Start Planning
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 8,
            color: 'var(--color-text)',
            display: 'none',
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 64,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(10,10,10,0.97)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              style={{
                textDecoration: 'none',
                fontSize: 24,
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                color: location.pathname === link.href ? 'var(--color-rose)' : 'var(--color-text)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/proposal" className="btn-primary" style={{ marginTop: 16, textDecoration: 'none' }}>
            Start Planning
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
