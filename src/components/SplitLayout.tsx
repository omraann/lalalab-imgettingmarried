import type { ReactNode } from 'react';

interface SplitLayoutProps {
  title: string;
  subtitle: string;
  left: ReactNode;
  right: ReactNode;
}

export default function SplitLayout({ title, subtitle, left, right }: SplitLayoutProps) {
  return (
    <div style={{ paddingTop: 80, minHeight: '100vh' }}>
      {/* Page header */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '48px 24px 32px',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 12px',
            lineHeight: 1.1,
          }}
        >
          {title}
        </h1>
        <p style={{ color: 'var(--color-muted)', fontSize: 16, margin: 0 }}>{subtitle}</p>
      </div>

      {/* Split content */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px 80px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 3fr)',
          gap: 32,
          alignItems: 'start',
        }}
        className="split-grid"
      >
        <div className="card" style={{ padding: 28 }}>
          {left}
        </div>
        <div>{right}</div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .split-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
