import React from 'react';
import { technicalSkills } from '../../constants/skills';
import Card from '../ui/Card';

const SkillBar = ({ level }: { level: number }) => (
  <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
    <div 
      className="bg-gradient-to-r from-purple-400 to-pink-400 h-full rounded-full transition-all duration-500"
      style={{ width: `${level}%` }}
    />
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Technical Skills
        </h2>
        <div className="space-y-12">
          {technicalSkills.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">
                  {category.category}
                </h3>
                <p className="text-gray-400">{category.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <Card key={skillIndex}>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-lg font-semibold">{skill.name}</h4>
                        <span className="text-purple-400">{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} />
                      <p className="text-gray-400 text-sm">{skill.description}</p>
                    </div>
                  </Card>
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