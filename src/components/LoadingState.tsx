export default function LoadingState() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '64px 24px',
        gap: 20,
      }}
    >
      <div
        style={{
          fontSize: 40,
          animation: 'pulse-heart 1.4s ease-in-out infinite',
        }}
      >
        💍
      </div>
      <p
        style={{
          color: 'var(--color-muted)',
          fontSize: 15,
          fontFamily: 'var(--font-heading)',
          fontStyle: 'italic',
          margin: 0,
          textAlign: 'center',
        }}
      >
        Crafting something magical...
      </p>
      <div style={{ display: 'flex', gap: 6 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: 'var(--color-rose)',
              animation: `pulse-heart 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
