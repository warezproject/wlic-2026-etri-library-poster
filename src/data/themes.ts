export interface Theme {
  id: 'designing' | 'automating' | 'reimagining';
  title: string;
  description: string;
  colorVar: string;
  icon: string;
}

export const themes: Theme[] = [
  {
    id: 'designing',
    title: 'Designing Services',
    description:
      'Using AI as a co-designer to validate concepts, map workflows, and prototype new library services.',
    colorVar: '--color-theme-1',
    icon: '🎨',
  },
  {
    id: 'automating',
    title: 'Automating Work',
    description:
      'Replacing manual, repetitive tasks with RPA workflows, APIs, and AI-generated scripts.',
    colorVar: '--color-theme-2',
    icon: '⚙️',
  },
  {
    id: 'reimagining',
    title: 'Reimagining the Library',
    description:
      'Rethinking how the library is discovered, used, and experienced through AI-assisted transformation.',
    colorVar: '--color-theme-3',
    icon: '✨',
  },
];
