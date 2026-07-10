import GeneratorPage, { type FieldConfig } from '../components/GeneratorPage';

const fields: FieldConfig[] = [
  {
    id: "Partner's Style",
    label: "Partner's Style",
    type: 'select',
    options: ['Classic', 'Modern', 'Vintage', 'Minimalist', 'Bold'],
  },
  {
    id: 'Lifestyle',
    label: 'Lifestyle',
    type: 'select',
    options: ['Active', 'Office/Professional', 'Creative/Artistic', 'Homebody'],
  },
  {
    id: 'Metal Preference',
    label: 'Metal Preference',
    type: 'select',
    options: ['No idea', 'Silver/White tones', 'Gold tones', 'Rose Gold', 'Mix of metals'],
  },
  {
    id: 'Budget',
    label: 'Budget',
    type: 'select',
    options: ['Under $1K', '$1K–$3K', '$3K–$5K', '$5K–$10K', '$10K+'],
  },
];

const tabs = [
  { label: 'Overall', key: 'OVERALL' },
  { label: 'Style', key: 'STYLE' },
  { label: 'Metal', key: 'METAL' },
  { label: 'Stone', key: 'STONE' },
  { label: 'Examples', key: 'EXAMPLES' },
  { label: 'What to Avoid', key: 'AVOID' },
  { label: 'Buying Tips', key: 'TIPS' },
];

export default function RingAdvisorPage() {
  return (
    <GeneratorPage
      title="Ring Advisor"
      subtitle="Find the perfect engagement ring based on their personality, lifestyle, and your budget."
      apiType="ring-advisor"
      fields={fields}
      submitLabel="Find My Perfect Ring"
      tabs={tabs}
    />
  );
}
