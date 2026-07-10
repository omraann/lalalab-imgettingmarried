import GeneratorPage, { type FieldConfig } from '../components/GeneratorPage';
import CopyButton from '../components/CopyButton';

const fields: FieldConfig[] = [
  { id: "Partner's Name", label: "Partner's Name", type: 'text', placeholder: 'e.g. Hala' },
  {
    id: 'Occasion',
    label: 'Occasion',
    type: 'select',
    options: ['Anniversary', 'Birthday', 'Just Because', 'Long Distance', 'Apology', 'Good Morning'],
  },
  {
    id: 'Tone',
    label: 'Tone',
    type: 'select',
    options: ['Passionate', 'Sweet', 'Playful', 'Deep & Meaningful'],
  },
  {
    id: 'Things You Love About Them',
    label: 'Things You Love About Them',
    type: 'textarea',
    placeholder: 'The way she reads books curled up, her laugh that fills a room, how she always knows when I need...',
  },
  {
    id: 'Length',
    label: 'Length',
    type: 'select',
    options: ['Short note (100–150 words)', 'Medium letter (250–350 words)', 'Long letter (400–600 words)'],
  },
];

export default function LoveLetterPage() {
  return (
    <GeneratorPage
      title="Love Letter"
      subtitle="Generate a heartfelt letter for any occasion — written as if you wrote it yourself."
      apiType="love-letter"
      fields={fields}
      submitLabel="Write My Love Letter"
      renderResult={(text) => (
        <div
          className="card"
          style={{
            padding: 40,
            background: 'linear-gradient(160deg, #141414 0%, #1a0f10 100%)',
            borderColor: 'rgba(183,110,121,0.2)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 20,
              left: 24,
              fontSize: 48,
              opacity: 0.08,
              fontFamily: 'var(--font-heading)',
              lineHeight: 1,
            }}
          >
            "
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 20 }}>
            <CopyButton text={text} />
          </div>
          <div
            className="result-content"
            style={{ fontFamily: 'var(--font-heading)', fontSize: 16, lineHeight: 1.9 }}
          >
            {text}
          </div>
        </div>
      )}
    />
  );
}
