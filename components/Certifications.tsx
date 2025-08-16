import React from 'react';
import { certifications } from '../constants.tsx';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-[#F8F5F2]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B4237]">Certifications & Training</h2>
          <p className="text-lg text-[#6B6258] mt-2">Committed to continuous professional development.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-[#EAE6E1] p-6 rounded-lg shadow-sm flex flex-col items-center text-center w-full sm:w-80 border border-transparent hover:border-[#D1CAC2] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              {/* The image now uses object-contain for better logo display */}
              <img src={cert.logoUrl} alt={`${cert.issuer} logo`} className="w-16 h-16 mb-4 rounded-full object-contain bg-white border-2 border-gray-200 p-1"/>
              <h3 className="text-lg font-bold text-[#4B4237]">{cert.title}</h3>
              <p className="text-md text-[#6B6258] font-semibold">{cert.issuer}</p>
              <p className="text-sm text-[#A68A68] font-bold mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;