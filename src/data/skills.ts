export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    skills: [
      { name: 'Java' },
      { name: 'Python' },
      { name: 'C' },
      { name: 'C++' },
    ],
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'Next.js' },
    ],
  },
  {
    title: 'Data & Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL' },
      { name: 'SQL' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🔧',
    skills: [
      { name: 'VS Code' },
      { name: 'Git & GitHub' },
      { name: 'Linux' },
      { name: 'Docker' },
    ],
  },
  {
    title: 'Emerging Tech',
    icon: '🚀',
    skills: [
      { name: 'Arduino' },
      { name: 'UI Design' },
      { name: 'Frontend' },
      { name: 'AI/ML' },
      { name: 'PCB Design' },
      { name: 'AR' },
      { name: 'ROS2' },
    ],
  },
  {
    title: 'Problem Solving',
    icon: '🧠',
    skills: [
      { name: 'Problem Solving' },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    skills: [
      { name: 'Teamwork' },
      { name: 'Communication' },
      { name: 'Adaptability' },
      { name: 'Time Management' },
      { name: 'Creativity' },
      { name: 'Leadership' },
      { name: 'Public Speaking' },
    ],
  },
];
