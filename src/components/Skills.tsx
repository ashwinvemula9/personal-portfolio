import React from 'react';
import { Code2, Palette, Database, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="w-6 h-6" />,
    skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Webpack', 'Redux']
  },
  {
    title: 'UI/UX Design',
    icon: <Palette className="w-6 h-6" />,
    skills: ['Tailwind CSS', 'Styled Components', 'Framer Motion', 'SCSS', 'Figma', 'Adobe XD']
  },
  {
    title: 'Backend & Database',
    icon: <Database className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs']
  },
  {
    title: 'DevOps & Tools',
    icon: <Terminal className="w-6 h-6" />,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Cypress']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;