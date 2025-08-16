import React from 'react';
import { experience } from '../constants.tsx';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-[#EAE6E1] dark:bg-[#2C2722]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B4237] dark:text-[#FDFBFA]">Relevant Experience</h2>
          <p className="text-lg text-[#6B6258] dark:text-[#D1CAC2] mt-2">Foundational roles that have shaped my professional skills.</p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          {/* Vertical Timeline Bar */}
          <div className="absolute left-2 top-2 w-0.5 h-full bg-[#D1CAC2] dark:bg-[#4B4237]" aria-hidden="true"></div>
          
          <div className="space-y-12">
            {experience.map((item) => (
              <div key={item.role} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-2 top-2 -translate-x-1/2 w-4 h-4 bg-[#A68A68] rounded-full border-4 border-[#EAE6E1] dark:border-[#2C2722]" aria-hidden="true"></div>
                
                {/* Content card */}
                <div className="p-6 rounded-lg shadow-lg bg-[#F8F5F2] dark:bg-[#1C1A19] text-left">
                  <p className="text-sm font-bold text-[#A68A68] mb-1">{item.period}</p>
                  <h3 className="text-xl font-bold text-[#4B4237] dark:text-[#FDFBFA]">{item.role}</h3>
                  <p className="text-md font-semibold text-[#6B6258] dark:text-[#D1CAC2] mb-3">{item.company}</p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[#6B6258] dark:text-[#D1CAC2]">
                    {item.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;