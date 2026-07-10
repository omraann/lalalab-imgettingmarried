import { useState, type FormEvent } from 'react';
import SplitLayout from '../components/SplitLayout';
import LoadingState from '../components/LoadingState';
import CopyButton from '../components/CopyButton';
import { generate } from '../lib/fireworks';

const fields = [
  { id: 'Budget', label: 'Budget', options: ['Free', 'Cheap (under $20)', 'Moderate ($20–$75)', 'Expensive ($75+)'] },
  { id: 'Indoor or Outdoor', label: 'Indoor or Outdoor', options: ['Either', 'Indoor', 'Outdoor'] },
  { id: 'Energy Level', label: 'Energy Level', options: ['Chill', 'Moderate', 'Active'] },
  { id: 'Location Type', label: 'Location Type', options: ['City', 'Nature', 'Either'] },
];

export default function DateIdeasPage() {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.id, '']))
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    const res = await generate({ type: 'date-ideas', data: values });

    setLoading(false);
    if (res.success && res.result) {
      setResult(res.result);
    } else {
      setError(res.error ?? 'Something went wrong. Please try again.');
    }
  };

  const isValid = fields.every((f) => values[f.id]?.trim());

  const formEl = (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {fields.map((field) => (
          <div key={field.id}>
            <label className="form-label" htmlFor={field.id}>{field.label}</label>
            <select
              id={field.id}
              className="form-input"
              value={values[field.id]}
              onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
            >
              <option value="">Select...</option>
              {field.options.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </div>
        ))}

        <button
          type="submit"
          className="btn-primary"
          disabled={loading || !isValid}
          style={{
            width: '100%',
            justifyContent: 'center',
            opacity: loading || !isValid ? 0.6 : 1,
            cursor: loading || !isValid ? 'not-allowed' : 'pointer',
            marginTop: 8,
          }}
        >
          {loading ? 'Generating...' : 'Get Date Ideas'}
        </button>
      </div>
    </form>
  );

  const resultEl = (() => {
    if (loading) return <LoadingState />;

    if (error) {
      return (
        <div className="card" style={{ padding: 32, textAlign: 'center' }}>
          <p style={{ color: '#e88', fontSize: 15, margin: 0 }}>{error}</p>
        </div>
      );
    }

    if (!result) {
      return (
        <div className="card" style={{ padding: 48, textAlign: 'center', border: '1px dashed var(--color-border)' }}>
          <p style={{ fontSize: 48, marginBottom: 16 }}>✨</p>
          <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-muted)', fontSize: 16, margin: 0 }}>
            Your next great date starts here
          </p>
        </div>
      );
    }

    // Parse 5 date ideas — split by "---DATE IDEA" markers
    const ideas = result.split(/---DATE IDEA \d+---/).filter(Boolean).map((s) => s.trim());

    return (
      <div className="animate-fade-in-up">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
          <CopyButton text={result} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {ideas.length > 0
            ? ideas.map((idea, i) => (
                <div key={i} className="card" style={{ padding: 24 }}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-rose)',
                      margin: '0 0 8px',
                    }}
                  >
                    Date {i + 1}
                  </p>
                  <div className="result-content" style={{ fontSize: 14 }}>{idea}</div>
                </div>
              ))
            : (
              <div className="card" style={{ padding: 28 }}>
                <div className="result-content">{result}</div>
              </div>
            )}
        </div>
        <button
          className="btn-secondary"
          style={{ marginTop: 16, fontSize: 13 }}
          onClick={handleSubmit as unknown as React.MouseEventHandler}
        >
          Regenerate
        </button>
      </div>
    );
  })();

  return (
    <SplitLayout
      title="Date Ideas"
      subtitle="Get five creative, personalized date ideas tailored to your style and budget."
      left={formEl}
      right={resultEl}
    />
  );
}
