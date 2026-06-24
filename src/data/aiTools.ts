export interface AiTool {
  icon: string;
  name: string;
  description: string;
}

export const aiTools: AiTool[] = [
  {
    icon: '🤖',
    name: 'Generative AI (LLM)',
    description:
      'Service concept design, user workflow mapping, and application code generation.',
  },
  {
    icon: '🔄',
    name: 'RPA (Robotic Process Automation)',
    description:
      'Automating repetitive data collection and display update tasks without custom infrastructure.',
  },
  {
    icon: '🔌',
    name: 'REST APIs',
    description:
      'Connecting library systems to external data sources and display endpoints.',
  },
  {
    icon: '📋',
    name: 'Metadata Structuring',
    description:
      'Improving record completeness and format for Google Scholar indexing.',
  },
  {
    icon: '🎨',
    name: 'AI Image Generation',
    description:
      'Producing visual space planning concepts for library renovation proposals.',
  },
  {
    icon: '💻',
    name: 'AI-Assisted Coding',
    description:
      'Generating and debugging scripts for data pipelines and automation workflows.',
  },
];
