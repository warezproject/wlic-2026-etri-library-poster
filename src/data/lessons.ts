export interface Lesson {
  number: number;
  headline: string;
  body: string;
}

export const lessons: Lesson[] = [
  {
    number: 1,
    headline: 'The bottleneck is workflow design, not technology.',
    body: 'AI tools are widely available; the skill is knowing where to apply them and how to structure the work around them.',
  },
  {
    number: 2,
    headline: 'Small libraries can move fast without large IT teams.',
    body: 'AI-assisted coding, RPA, and APIs lower the barrier to building custom solutions that fit your library exactly.',
  },
  {
    number: 3,
    headline: 'Start with a real problem, not a technology.',
    body: 'Each case began with a specific pain point — kiosk cost, staff time, discoverability — and AI was the tool, not the goal.',
  },
  {
    number: 4,
    headline: 'Visibility compounds over time.',
    body: 'Improving Google Scholar discoverability took sustained effort, but the referral traffic growth from 354 to 5,315 visits shows the long-term payoff.',
  },
];
