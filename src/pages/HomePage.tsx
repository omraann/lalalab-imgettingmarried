import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const features = [
  {
    icon: '💍',
    title: 'Proposal Planner',
    description: 'Craft the perfect proposal speech, venue plan, and preparation checklist.',
    href: '/proposal',
  },
  {
    icon: '💌',
    title: 'Vow Writer',
    description: 'Write wedding vows that make everyone cry — personalized to your story.',
    href: '/vows',
  },
  {
    icon: '💕',
    title: 'Love Letter',
    description: 'Generate heartfelt letters for any occasion, in any tone.',
    href: '/love-letter',
  },
  {
    icon: '💎',
    title: 'Ring Advisor',
    description: 'Find the perfect ring based on their personality, lifestyle, and your budget.',
    href: '/ring-advisor',
  },
  {
    icon: '✨',
    title: 'Date Ideas',
    description: 'Get creative date ideas tailored to your style, budget, and energy.',
    href: '/date-ideas',
  },
];

const steps = [
  { number: '01', title: 'Share your story', description: 'Tell us about your partner, your relationship, and what makes your love unique.' },
  { number: '02', title: 'AI crafts your plan', description: 'Kimi K2 — running on AMD GPUs — generates something deeply personal and beautiful.' },
  { number: '03', title: 'Make it unforgettable', description: 'Take your plan, your speech, your letter — and make the moment yours.' },
];

export default function HomePage() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '100px 24px 80px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0d 50%, #0a0a0a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(183,110,121,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <p
          style={{
            fontSize: 12,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: 'var(--color-rose)',
            marginBottom: 24,
            position: 'relative',
          }}
        >
          AI-Powered Romantic Planning
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(40px, 7vw, 80px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            lineHeight: 1.08,
            margin: '0 0 28px',
            maxWidth: 760,
            position: 'relative',
          }}
        >
          Plan the moment that{' '}
          <span style={{ color: 'var(--color-rose)', fontStyle: 'italic' }}>changes everything.</span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'var(--color-muted)',
            maxWidth: 540,
            lineHeight: 1.65,
            margin: '0 0 48px',
            position: 'relative',
          }}
        >
          AI-powered tools to help you propose, write vows, and celebrate love. Powered by Kimi K2 on AMD hardware.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', position: 'relative' }}>
          <button className="btn-primary" onClick={scrollToFeatures} style={{ fontSize: 16, padding: '14px 36px' }}>
            Start Planning
          </button>
          <Link to="/about" className="btn-secondary" style={{ fontSize: 16, padding: '13px 36px', textDecoration: 'none' }}>
            Our Story
          </Link>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            opacity: 0.4,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '96px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-rose)',
              marginBottom: 16,
            }}
          >
            Five Ways to Plan Forever
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'var(--color-text)',
              margin: 0,
            }}
          >
            Every tool you need for the perfect moment
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}
        >
          {features.map((f) => (
            <FeatureCard key={f.href} {...f} />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section
        style={{
          padding: '96px 24px',
          background: 'linear-gradient(180deg, transparent, rgba(183,110,121,0.04), transparent)',
        }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-rose)',
              marginBottom: 16,
            }}
          >
            How It Works
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              color: 'var(--color-text)',
              margin: '0 0 64px',
            }}
          >
            Three steps to your perfect moment
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {steps.map((step) => (
              <div key={step.number} className="card" style={{ padding: 32, textAlign: 'left' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 48,
                    fontWeight: 700,
                    color: 'rgba(183,110,121,0.3)',
                    margin: '0 0 16px',
                    lineHeight: 1,
                  }}
                >
                  {step.number}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: 20,
                    color: 'var(--color-text)',
                    margin: '0 0 10px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: 14, lineHeight: 1.65, margin: 0 }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 24px', textAlign: 'center' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: 'var(--color-text)',
            margin: '0 0 16px',
          }}
        >
          Ready to plan your perfect moment?
        </h2>
        <p style={{ color: 'var(--color-muted)', fontSize: 16, margin: '0 0 40px' }}>
          Start with the proposal planner and see what's possible.
        </p>
        <Link to="/proposal" className="btn-primary" style={{ fontSize: 16, padding: '14px 40px', textDecoration: 'none' }}>
          Get Started Free
        </Link>
      </section>
    </div>
  );
}
