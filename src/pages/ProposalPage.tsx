import GeneratorPage, { type FieldConfig } from '../components/GeneratorPage';

const fields: FieldConfig[] = [
  { id: "Partner's Name", label: "Partner's Name", type: 'text', placeholder: 'e.g. Hala' },
  {
    id: 'Relationship Length',
    label: 'Relationship Length',
    type: 'select',
    options: ['Less than 1 year', '1–2 years', '2–5 years', '5+ years'],
  },
  {
    id: "Partner's Personality",
    label: "Partner's Personality",
    type: 'textarea',
    placeholder: "She's shy but loves adventure, has a warm laugh, obsessed with sunsets...",
  },
  {
    id: 'Budget',
    label: 'Budget',
    type: 'select',
    options: ['Intimate & meaningful', 'Moderate', 'Luxury'],
  },
  {
    id: 'Setting Preference',
    label: 'Setting Preference',
    type: 'select',
    options: ['Outdoor', 'Restaurant', 'Home', 'Travel', 'Surprise'],
  },
  {
    id: 'Proposal Style',
    label: 'Proposal Style',
    type: 'select',
    options: ['Romantic', 'Playful', 'Simple', 'Grand'],
  },
];

const tabs = [
  { label: 'Speech', key: 'PROPOSAL SPEECH' },
  { label: 'Venues', key: 'VENUES' },
  { label: 'Timing', key: 'TIMING' },
  { label: 'Rings', key: 'RINGS' },
  { label: 'Checklist', key: 'CHECKLIST' },
  { label: 'Backup Plans', key: 'BACKUP' },
];

export default function ProposalPage() {
  return (
    <GeneratorPage
      title="Proposal Planner"
      subtitle="Craft the perfect proposal — speech, venue, timing, and everything in between."
      apiType="proposal"
      fields={fields}
      submitLabel="Generate My Proposal Plan"
      tabs={tabs}
    />
  );
}
