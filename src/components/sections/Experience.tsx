import React from 'react';
import { workExperience } from '../../constants/experience';
import Card from '../ui/Card';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work Experience</h2>
        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <Card key={index} className="relative">
              <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-bold mb-2">
                    {exp.url ? (
                      <a 
                        href={exp.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.industry}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h4 className="text-xl font-semibold mb-4 text-purple-400">{exp.role}</h4>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <span className="text-purple-400 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;