import React from 'react';

const ABOUT_HEADSHOT_URL = 'https://ik.imagekit.io/zgmzllqewo/image-removebg-preview__1_-removebg-preview.png?updatedAt=1755314980382';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#F8F5F2] dark:bg-[#1C1A19]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#4B4237] dark:text-[#FDFBFA]">About Me</h2>
            <div className="space-y-4 text-lg text-[#6B6258] dark:text-[#D1CAC2] leading-relaxed">
              <p>
                As a recent high school graduate with a fervent passion for real estate and architecture, I am eager to embark on a career as a Real Estate Sales Professional in Dubai's dynamic market. My goal is to build a reputation based on trust, dedication, and delivering exceptional value to clients.
              </p>
              <p>
                I have proactively equipped myself with industry-relevant knowledge through certifications in <span className="font-bold text-[#A68A68] dark:text-[#A68A68]">Real Estate Sales</span>, <span className="font-bold text-[#A68A68] dark:text-[#A68A68]">Digital Marketing</span>, and <span className="font-bold text-[#A68A68] dark:text-[#A68A68]">Sales Closing Techniques</span>. My skill set includes cold calling, lead generation, property marketing, and proficiency with essential CRM tools like Bayut, Property Finder, and Dubizzle.
              </p>
              <p>
                Fluent in English, Hindi, Bengali, and Urdu, I can connect with a diverse clientele. I am a quick learner, highly adaptable, and committed to understanding and adhering to RERA compliance and Dubai's real estate regulations.
              </p>
            </div>
          </div>
          <div className="lg:w-2/5 w-full flex justify-center">
            {/* The image container is now circular and has the floating effect */}
            <div className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] bg-[#EAE6E1] dark:bg-[#2C2722] rounded-full shadow-xl dark:shadow-2xl dark:shadow-black/50 overflow-hidden p-3 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
                {/* The image is styled to fit within the circular frame */}
                <img 
                  src={ABOUT_HEADSHOT_URL} 
                  alt="Zeeshan Raja" 
                  className="w-full h-full object-contain bg-[#EAE6E1] dark:bg-[#2C2722] rounded-full"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;