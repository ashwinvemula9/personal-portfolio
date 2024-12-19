interface Skill {
  name: string;
  level: number;
  description: string;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Expertise in building responsive, performant, and accessible web applications',
    skills: [
      {
        name: 'React.js',
        level: 95,
        description: 'Advanced state management, custom hooks, and performance optimization'
      },
      {
        name: 'TypeScript',
        level: 80,
        description: 'Type-safe development with advanced generics and utility types'
      },
      {
        name: 'Next.js',
        level: 75,
        description: 'Server-side rendering, static site generation, and API routes'
      },
      {
        name: 'HTML/CSS',
        level: 95,
        description: 'Semantic markup, responsive design, and modern CSS features'
      },
      {
        name: 'JavaScript',
        level: 95,
        description: 'ES6+, async programming, and modern JavaScript patterns'
      }
    ]
  },
  {
    category: 'Backend Development',
    description: 'Experience in building scalable server-side applications and APIs',
    skills: [
      {
        name: 'Node.js',
        level: 65,
        description: 'RESTful APIs, middleware, and event-driven programming'
      },
      {
        name: 'Express.js',
        level: 60,
        description: 'Route handling, authentication, and API development'
      },
      {
        name: 'MongoDB',
        level: 65,
        description: 'Schema design, queries, and database optimization'
      }
    ]
  },
  {
    category: 'Development Tools',
    description: 'Proficiency in modern development tools and practices',
    skills: [
      {
        name: 'Git',
        level: 90,
        description: 'Version control, branching strategies, and collaboration'
      },
      {
        name: 'REST APIs',
        level: 85,
        description: 'API design, documentation, and integration'
      },
      {
        name: 'Agile',
        level: 85,
        description: 'Scrum methodology, sprint planning, and team collaboration'
      }
    ]
  }
];