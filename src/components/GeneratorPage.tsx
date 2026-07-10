import { useState, type FormEvent, type ReactElement } from 'react';
import SplitLayout from './SplitLayout';
import LoadingState from './LoadingState';
import CopyButton from './CopyButton';
import { generate } from '../lib/fireworks';

export interface FieldConfig {
  id: string;
  label: string;
  type: 'text' | 'textarea' | 'select';
  placeholder?: string;
  options?: string[];
}

interface Tab {
  label: string;
  key: string;
}

interface GeneratorPageProps {
  title: string;
  subtitle: string;
  apiType: string;
  fields: FieldConfig[];
  submitLabel: string;
  tabs?: Tab[];
  renderResult?: (text: string) => ReactElement;
}

function parseSection(text: string, marker: string): string {
  const regex = new RegExp(`---${marker}---([\\s\\S]*?)(?=---|$)`, 'i');
  const match = regex.exec(text);
  return match ? match[1].trim() : '';
}

export default function GeneratorPage({
  title,
  subtitle,
  apiType,
  fields,
  submitLabel,
  tabs,
  renderResult,
}: GeneratorPageProps) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.id, '']))
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    const res = await generate({ type: apiType, data: values });

    setLoading(false);
    if (res.success && res.result) {
      setResult(res.result);
      setActiveTab(0);
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
            <label className="form-label" htmlFor={field.id}>
              {field.label}
            </label>
            {field.type === 'text' && (
              <input
                id={field.id}
                className="form-input"
                type="text"
                placeholder={field.placeholder}
                value={values[field.id]}
                onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
              />
            )}
            {field.type === 'select' && (
              <select
                id={field.id}
                className="form-input"
                value={values[field.id]}
                onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
              >
                <option value="">Select...</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            )}
            {field.type === 'textarea' && (
              <textarea
                id={field.id}
                className="form-input"
                placeholder={field.placeholder}
                value={values[field.id]}
                onChange={(e) => setValues((v) => ({ ...v, [field.id]: e.target.value }))}
                rows={4}
                style={{ resize: 'vertical', minHeight: 96 }}
              />
            )}
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
          {loading ? (
            <>
              <span style={{ animation: 'pulse-heart 1s infinite' }}>💍</span>
              Generating...
            </>
          ) : (
            submitLabel
          )}
        </button>
      </div>
    </form>
  );

  const resultEl = (() => {
    if (loading) return <LoadingState />;

    if (error) {
      return (
        <div
          className="card"
          style={{
            padding: 32,
            border: '1px solid rgba(220,60,60,0.3)',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 32, marginBottom: 16 }}>⚠️</p>
          <p style={{ color: '#e88', fontSize: 15, margin: 0, lineHeight: 1.6 }}>{error}</p>
        </div>
      );
    }

    if (!result) {
      return (
        <div
          className="card"
          style={{
            padding: 48,
            textAlign: 'center',
            border: '1px dashed var(--color-border)',
          }}
        >
          <p style={{ fontSize: 48, marginBottom: 16 }}>✨</p>
          <p
            style={{
              fontFamily: 'var(--font-heading)',
              fontStyle: 'italic',
              color: 'var(--color-muted)',
              fontSize: 16,
              margin: 0,
            }}
          >
            Your love story starts here
          </p>
          <p style={{ color: 'var(--color-muted)', fontSize: 14, marginTop: 10 }}>
            Fill in the form and click generate.
          </p>
        </div>
      );
    }

    if (renderResult) {
      return <div className="animate-fade-in-up">{renderResult(result)}</div>;
    }

    if (tabs && tabs.length > 0) {
      const currentTab = tabs[activeTab];
      const sectionText = parseSection(result, currentTab.key.toUpperCase().replace(/-/g, ' '));

      return (
        <div className="animate-fade-in-up">
          {/* Tab bar */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
            {tabs.map((tab, i) => (
              <button
                key={tab.key}
                className={`tab-btn${activeTab === i ? ' active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="card" style={{ padding: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18, margin: 0, color: 'var(--color-text)' }}>
                {currentTab.label}
              </h3>
              <CopyButton text={sectionText || result} />
            </div>
            <div className="result-content">{sectionText || result}</div>
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
    }

    return (
      <div className="animate-fade-in-up">
        <div className="card" style={{ padding: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18, margin: 0, color: 'var(--color-text)' }}>
              Your result
            </h3>
            <CopyButton text={result} />
          </div>
          <div className="result-content">{result}</div>
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

  return <SplitLayout title={title} subtitle={subtitle} left={formEl} right={resultEl} />;
}
