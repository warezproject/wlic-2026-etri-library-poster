import type { Theme } from './themes';

export interface Case {
  id: string;
  themeId: Theme['id'];
  icon: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  aiRole: string;
  outcome: string;
}

export const cases: Case[] = [
  {
    id: 'kiosk',
    themeId: 'designing',
    icon: '📦',
    title: 'Self-Service Kiosk',
    summary:
      'AI helped design and build a custom self-service borrowing kiosk from scratch.',
    problem:
      'No budget for a commercial kiosk; staff time was spent on manual circulation.',
    approach:
      'Used generative AI to validate the service concept, map the user workflow, and generate kiosk application code.',
    aiRole:
      'LLM as co-designer and code generator — from concept sketch to working prototype.',
    outcome: 'Borrowing volume approximately doubled compared with the previous year.',
  },
  {
    id: 'plagiarism',
    themeId: 'designing',
    icon: '🔍',
    title: 'Plagiarism Checking Service',
    summary:
      'A new library service for checking potential plagiarism in ETRI research papers.',
    problem:
      'Researchers had no convenient in-house way to check papers before submission.',
    approach:
      'Used AI to co-design the service concept and user workflow, then integrated with an existing detection tool.',
    aiRole:
      'LLM as service design partner; helped prototype the user journey and define scope.',
    outcome:
      'New library service launched, providing value to researchers at no additional tooling cost.',
  },
  {
    id: 'displays',
    themeId: 'automating',
    icon: '🖥️',
    title: 'Automated Library Displays',
    summary: 'Library information screens now update automatically via RPA and APIs.',
    problem:
      'Keeping multiple information displays current required repetitive manual effort.',
    approach:
      'Built RPA workflows to pull data from library systems and push updates to displays on a schedule.',
    aiRole:
      'AI assisted in scripting the automation logic and troubleshooting API connections.',
    outcome: 'Staff time saved; displays stay accurate without manual intervention.',
  },
  {
    id: 'ingestion',
    themeId: 'automating',
    icon: '⚙️',
    title: 'Research Output Pipeline',
    summary:
      'One staff member now processes ~1,800 research records annually through a structured workflow.',
    problem:
      'Annual collection, verification, and entry of ETRI research output data was labor-intensive and error-prone.',
    approach:
      'Designed a structured data pipeline using AI-generated scripts and automation to handle collection, verification, enrichment, and ingestion.',
    aiRole:
      'LLM generated the processing scripts; AI assisted in designing the pipeline stages.',
    outcome:
      '~1,800 research outputs verified and entered annually by a single staff member.',
  },
  {
    id: 'scholar',
    themeId: 'reimagining',
    icon: '🔎',
    title: 'Google Scholar Visibility',
    summary:
      "ETRI Library's Google Scholar indexed records grew from ~10 to 4,200+ in two years.",
    problem:
      "ETRI Library's holdings were nearly invisible on Google Scholar, resulting in minimal referral traffic.",
    approach:
      'Used AI to diagnose metadata gaps, guide structured data preparation, and automate submission processes.',
    aiRole:
      'AI as diagnostic partner and automation assistant for metadata improvement and indexing.',
    outcome:
      'Indexed records: ~10 (2024) → 4,200+ (2026). Referral visits: 354 (2024) → 5,315 (2025).',
  },
  {
    id: 'remodeling',
    themeId: 'reimagining',
    icon: '🏛️',
    title: 'AI-Assisted Space Planning',
    summary:
      'AI generated multiple space planning concepts for a library renovation project.',
    problem:
      'The library needed renovation ideas but lacked access to architectural design resources.',
    approach:
      'Used AI image generation and spatial reasoning to produce, iterate, and compare multiple remodeling concepts rapidly.',
    aiRole:
      'AI as creative co-designer — generating visual concepts and spatial layouts for human review.',
    outcome:
      'Multiple viable remodeling concepts produced rapidly at minimal cost, giving decision-makers concrete options.',
  },
];
