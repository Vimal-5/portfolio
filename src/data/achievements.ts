export interface Achievement {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  type: 'award' | 'certification' | 'participation';
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: 'Winner',
    subtitle: 'Gramam Thorum Puththolil Hackathon',
    description:
      'Secured first place in the Gramam Thorum Puththolil Hackathon, demonstrating innovative problem-solving and technical skills under competitive conditions.',
    icon: '🏆',
    type: 'award',
  },
  {
    id: 2,
    title: 'HackerRank Certifications',
    subtitle: 'Java & Problem Solving',
    description:
      'Earned HackerRank certifications in Java (Basic), Problem Solving (Basic), and Problem Solving (Intermediate), showcasing algorithmic proficiency.',
    icon: '🏅',
    type: 'certification',
  },
  {
    id: 3,
    title: 'Active Participant',
    subtitle: 'College Events & Workshops',
    description:
      'Actively participated in various college events, workshops, and technology events, continuously expanding technical knowledge and networking skills.',
    icon: '🎯',
    type: 'participation',
  },
];
