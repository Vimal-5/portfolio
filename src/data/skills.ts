export interface Skill {
  name: string;
  percentage: number;
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
      { name: 'Java', percentage: 90 },
      { name: 'Python', percentage: 80 },
      { name: 'C', percentage: 70 },
      { name: 'C++', percentage: 65 },
    ],
  },
  {
    title: 'Web Technologies',
    icon: '🌐',
    skills: [
      { name: 'HTML', percentage: 90 },
      { name: 'CSS', percentage: 85 },
      { name: 'JavaScript', percentage: 70 },
      { name: 'React', percentage: 60 },
      { name: 'Next.js', percentage: 50 },
    ],
  },
  {
    title: 'Data & Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', percentage: 70 },
      { name: 'SQL', percentage: 65 },
      { name: 'MongoDB', percentage: 60 },
      { name: 'Firebase', percentage: 50 },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🔧',
    skills: [
      { name: 'VS Code', percentage: 90 },
      { name: 'Git & GitHub', percentage: 80 },
      { name: 'Linux', percentage: 70 },
      { name: 'Docker', percentage: 60 },
    ],
  },
  {
    title: 'Emerging Tech',
    icon: '🚀',
    skills: [
      { name: 'Arduino', percentage: 80 },
      { name: 'UI Design', percentage: 75 },
      { name: 'Frontend', percentage: 70 },
      { name: 'AI/ML', percentage: 70 },
      { name: 'PCB Design', percentage: 60 },
      { name: 'AR', percentage: 40 },
      { name: 'ROS2', percentage: 30 },
    ],
  },
  {
    title: 'Problem Solving',
    icon: '🧠',
    skills: [
      { name: 'Problem Solving', percentage: 90 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: '🤝',
    skills: [
      { name: 'Teamwork', percentage: 85 },
      { name: 'Communication', percentage: 80 },
      { name: 'Adaptability', percentage: 80 },
      { name: 'Time Management', percentage: 75 },
      { name: 'Creativity', percentage: 75 },
      { name: 'Leadership', percentage: 70 },
      { name: 'Public Speaking', percentage: 70 },
    ],
  },
];
