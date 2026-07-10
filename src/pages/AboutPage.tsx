export default function AboutPage() {
  const techStack = [
    { name: 'Kimi K2', desc: 'An open AI model, running on AMD hardware' },
    { name: 'Fireworks AI', desc: 'Fast, scalable inference on AMD GPUs' },
    { name: 'AMD Developer Cloud', desc: 'Where I tested and validated everything' },
    { name: 'React + Vite', desc: 'The framework' },
    { name: 'TypeScript', desc: 'The language' },
    { name: 'Tailwind CSS', desc: 'The styling' },
    { name: 'Porsche Design System', desc: 'The component library' },
  ];

  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero quote */}
      <section
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '80px 24px',
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0d 60%, #0a0a0a 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(183,110,121,0.1) 0%, transparent 70%)',
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
            marginBottom: 32,
            position: 'relative',
          }}
        >
          About Forever
        </p>

        <blockquote
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(22px, 3.5vw, 38px)',
            fontStyle: 'italic',
            fontWeight: 400,
            color: 'var(--color-text)',
            maxWidth: 720,
            lineHeight: 1.45,
            margin: '0 0 28px',
            position: 'relative',
          }}
        >
          "I'm building this because I'm in love, and I want to win this hackathon to buy her the engagement ring she deserves."
        </blockquote>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            color: 'var(--color-rose)',
            fontSize: 18,
            fontWeight: 600,
            margin: 0,
            position: 'relative',
          }}
        >
          — Omran Shibani
        </p>
      </section>

      {/* Body sections */}
      <section style={{ maxWidth: 680, margin: '0 auto', padding: '80px 24px' }}>

        {/* Section 1 */}
        <div style={{ marginBottom: 56 }}>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: 'var(--color-text)',
              margin: '0 0 20px',
            }}
          >
            Hi. I'm Omran Shibani. I'm building this app because I'm in love with a girl named Hala, and I want to win this hackathon to buy her the engagement ring she deserves.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: 'var(--color-text)',
              margin: '0 0 20px',
            }}
          >
            We met at the International Damascus Book Fair. I was the head of the journalist team for the Student Association of Syria. She was part of that team. For ten days, twelve hours a day, we walked together. That's how it started. That's how everything started.
          </p>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: 'var(--color-text)',
              margin: 0,
            }}
          >
            She's warm. She's always by my side. And when my business flopped — when everything I had built collapsed — she had every reason to walk away. She didn't. She chose to stay. She stayed with me when I had nothing.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0 0 56px' }} />

        {/* Section 2 */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--color-text)', margin: '0 0 20px' }}>
            So I built Forever. Not just for the prize. Not just for the ring. I'm building this because every feature in this app is something I wish I had while trying to plan my own proposal. I'm rebuilding my life, and she's the reason I'm still standing.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--color-text)', margin: 0 }}>
            This isn't just an app. It's practice for the moment I ask her to marry me.
          </p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0 0 56px' }} />

        {/* Tech Stack */}
        <div style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 28,
              fontWeight: 600,
              color: 'var(--color-text)',
              margin: '0 0 32px',
            }}
          >
            Forever is powered by:
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {techStack.map((item) => (
              <div key={item.name} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--color-rose)', fontSize: 16, lineHeight: 1.5, flexShrink: 0 }}>•</span>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'var(--color-text)' }}>
                  <strong style={{ color: 'var(--color-gold)' }}>{item.name}</strong>{' '}
                  <span style={{ color: 'var(--color-muted)' }}>— {item.desc}</span>
                </p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--color-muted)', marginTop: 28 }}>
            Every word generated by this app comes from Kimi K2, hosted on AMD GPUs through Fireworks AI. That matters. This isn't just AI — it's AI running on open, accessible hardware that anyone can use.
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(212,175,55,0.08)',
              border: '1px solid rgba(212,175,55,0.25)',
              borderRadius: 8,
              padding: '10px 18px',
              marginTop: 20,
            }}
          >
            <span style={{ fontSize: 18 }}>🏆</span>
            <span style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: 14 }}>
              Built for AMD Developer Hackathon: ACT II
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-border)', margin: '0 0 56px' }} />

        {/* Section 4 */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--color-text)', margin: '0 0 20px' }}>
            I want to propose to Hala soon. Within the next year. But the only thing stopping me is getting back on my feet after my business failed.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--color-text)', margin: '0 0 20px' }}>
            This hackathon is part of that journey. The prize money will help me buy her the ring she's always deserved. And this app — Forever — will keep helping other people plan their perfect moments long after the hackathon ends.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: 'var(--color-text)', margin: 0 }}>
            Thank you for reading this. Thank you for believing in love, in rebuilding, in second chances.
          </p>
        </div>

        {/* Closing */}
        <div style={{ textAlign: 'center', paddingTop: 24 }}>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 4vw, 36px)',
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'var(--color-rose)',
              margin: 0,
            }}
          >
            For Hala. Always.
          </p>
        </div>
      </section>
    </div>
  );
}
