import React from 'react';
import { skills } from '../constants.tsx';

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-[#EAE6E1] dark:bg-[#2C2722]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B4237] dark:text-[#FDFBFA]">Core Competencies</h2>
          <p className="text-lg text-[#6B6258] dark:text-[#D1CAC2] mt-2">The essential skills I bring to the table.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-[#F8F5F2] dark:bg-[#1C1A19] p-8 rounded-lg text-center shadow-md hover:shadow-xl dark:shadow-lg dark:shadow-black/50 hover:-translate-y-2 transition-all duration-300">
              {skill.icon}
              <h3 className="text-xl font-bold text-[#4B4237] dark:text-[#FDFBFA]">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;