import React from 'react';
import { testimonials } from '../constants.tsx';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#F8F5F2] dark:bg-[#1C1A19]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B4237] dark:text-[#FDFBFA]">Words of Appreciation</h2>
          <p className="text-lg text-[#6B6258] dark:text-[#D1CAC2] mt-2">Feedback from colleagues and mentors I've worked with.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#EAE6E1] dark:bg-[#2C2722] p-8 rounded-lg shadow-lg relative transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2">
              <svg className="absolute top-4 left-4 w-12 h-12 text-[#D1CAC2]/50 dark:text-[#4B4237]/50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 22.667h4L16 16V9.333H9.333v13.334zM22.667 22.667h4L29.333 16V9.333h-6.666v13.334z"></path>
              </svg>
              <div className="relative z-10">
                 <p className="text-lg italic text-[#6B6258] dark:text-[#D1CAC2] mb-6">"{testimonial.quote}"</p>
                 <div className="text-right">
                   <p className="font-bold text-[#4B4237] dark:text-[#FDFBFA]">{testimonial.name}</p>
                   <p className="text-sm text-[#A68A68]">{testimonial.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;