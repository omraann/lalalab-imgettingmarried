import GeneratorPage, { type FieldConfig } from '../components/GeneratorPage';

const fields: FieldConfig[] = [
  { id: "Partner's Name", label: "Partner's Name", type: 'text', placeholder: 'e.g. Hala' },
  {
    id: 'Tone',
    label: 'Tone',
    type: 'select',
    options: ['Traditional', 'Modern', 'Funny', 'Poetic', 'Short & Sweet'],
  },
  {
    id: 'Key Memories',
    label: 'Key Memories to Include',
    type: 'textarea',
    placeholder: 'The night we met, the trip to the mountains, the way you laughed at...',
  },
  {
    id: 'Promises',
    label: 'Promises You Want to Make',
    type: 'textarea',
    placeholder: 'To always make you laugh, to support your dreams, to be patient when...',
  },
  {
    id: 'Length',
    label: 'Length',
    type: 'select',
    options: ['Brief (under 100 words)', 'Medium (250 words)', 'Long (400+ words)'],
  },
];

const tabs = [
  { label: 'Main Vows', key: 'MAIN VOWS' },
  { label: 'Short Version', key: 'SHORT VERSION' },
];

export default function VowsPage() {
  return (
    <GeneratorPage
      title="Vow Writer"
      subtitle="Write wedding vows that make everyone in the room reach for tissues."
      apiType="vows"
      fields={fields}
      submitLabel="Write My Vows"
      tabs={tabs}
    />
  );
}
