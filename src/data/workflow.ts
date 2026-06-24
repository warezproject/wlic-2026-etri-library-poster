export interface WorkflowStep {
  step: number;
  label: string;
  description: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    step: 1,
    label: 'Collect',
    description: 'Gather research output data from internal systems and repositories.',
  },
  {
    step: 2,
    label: 'Verify',
    description: 'Check records for accuracy, duplicates, and completeness.',
  },
  {
    step: 3,
    label: 'Enrich',
    description: 'Add missing metadata fields using AI-assisted suggestions.',
  },
  {
    step: 4,
    label: 'Ingest',
    description: 'Enter verified records into the library management system.',
  },
  {
    step: 5,
    label: 'Report',
    description: 'Generate annual research output summary for institutional use.',
  },
];
