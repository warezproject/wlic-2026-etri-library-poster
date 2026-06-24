export interface Metric {
  value: string;
  label: string;
  sublabel: string;
  caseId: string;
}

export const metrics: Metric[] = [
  {
    value: '2×',
    label: 'Borrowing Volume',
    sublabel: 'Self-service kiosk vs. previous year',
    caseId: 'kiosk',
  },
  {
    value: '1,800',
    label: 'Records / Year',
    sublabel: 'Research outputs processed by 1 staff member',
    caseId: 'ingestion',
  },
  {
    value: '4,200+',
    label: 'Google Scholar Records',
    sublabel: '~10 in 2024 → 4,200+ in 2026',
    caseId: 'scholar',
  },
  {
    value: '5,315',
    label: 'Referral Visits',
    sublabel: 'Google Scholar visits in 2025 (vs. 354 in 2024)',
    caseId: 'scholar',
  },
];
