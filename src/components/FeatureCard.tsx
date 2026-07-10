import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <Link to={href} style={{ textDecoration: 'none' }}>
      <div className="card" style={{ padding: 28, height: '100%', cursor: 'pointer' }}>
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 12,
            background: 'rgba(183,110,121,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 26,
            marginBottom: 18,
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: 18,
            color: 'var(--color-text)',
            margin: '0 0 10px',
          }}
        >
          {title}
        </h3>
        <p style={{ color: 'var(--color-muted)', fontSize: 14, lineHeight: 1.65, margin: '0 0 20px' }}>
          {description}
        </p>
        <span style={{ color: 'var(--color-rose)', fontSize: 14, fontWeight: 600 }}>
          Try It →
        </span>
      </div>
    </Link>
  );
}
