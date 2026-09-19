export interface Certification {
  id: number;
  title: string;
  platform: string;
  verifiedUrl: string;
  icon: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Java (Basic)',
    platform: 'HackerRank',
    verifiedUrl: '#', // PLACEHOLDER — replace with actual certificate URL
    icon: '☕',
  },
  {
    id: 2,
    title: 'Problem Solving (Basic)',
    platform: 'HackerRank',
    verifiedUrl: '#', // PLACEHOLDER — replace with actual certificate URL
    icon: '🧩',
  },
  {
    id: 3,
    title: 'Problem Solving (Intermediate)',
    platform: 'HackerRank',
    verifiedUrl: '#', // PLACEHOLDER — replace with actual certificate URL
    icon: '🧠',
  },
];
