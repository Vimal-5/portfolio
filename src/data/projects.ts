export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  image?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Java Currency Converter',
    description:
      'A currency converter application built with Java, utilizing BST data structures and real-time exchange-rate API integration for efficient currency lookups and conversions.',
    technologies: ['Java', 'BST', 'API Integration'],
    githubUrl: '#', // PLACEHOLDER — replace with actual GitHub URL
    liveUrl: '#', // PLACEHOLDER — replace with actual live demo URL
    featured: true,
  },
  {
    id: 2,
    title: 'Blue Royal Hotel Website',
    description:
      'A responsive, modern hotel website featuring elegant UI design, smooth animations, and mobile-friendly layouts. Hosted on Netlify for fast global delivery.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
    githubUrl: '#', // PLACEHOLDER — replace with actual GitHub URL
    liveUrl: '#', // PLACEHOLDER — replace with actual live demo URL
    featured: true,
  },
  {
    id: 3,
    title: 'AI Revenue Recovery',
    description:
      'An AI-powered revenue recovery concept built for the Razorpay AI Buildathon. Features an AI Agent, analytics dashboard, and web app to help recover failed payments using intelligent retry strategies.',
    technologies: ['Python', 'LLM', 'Dashboard', 'AI Agent', 'Razorpay APIs'],
    githubUrl: '#', // PLACEHOLDER — replace with actual GitHub URL
    liveUrl: '#', // PLACEHOLDER — replace with actual project details URL
    featured: true,
  },
];
