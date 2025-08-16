import React from 'react';
import { navLinks } from '../constants.tsx';

const Footer = () => {
  const locationQuery = "Dubai, United Arab Emirates";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationQuery)}`;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#2C2722] text-[#D1CAC2]">
      <div className="container mx-auto px-6 py-8">
        
        {/* Logo */}
        <div className="text-center mb-6">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="inline-block bg-[#4B4237] p-3 rounded-full shadow-lg transition-transform hover:scale-110 hover:bg-[#6B6258] cursor-pointer">
            <span className="text-2xl font-black text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>ZR</span>
          </a>
        </div>

        {/* Quick Links */}
        <nav className="mb-6">
          <ul className="flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-center sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact and Connect */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-sm mb-6">
          <a href="mailto:zeeshan89819@gmail.com" className="hover:text-white transition-colors duration-300">
            zeeshan89819@gmail.com
          </a>
          <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            Dubai, United Arab Emirates
          </a>
          <a href="http://linkedin.com/in/zeeshan-raja" target="_blank" rel="noopener noreferrer" className="text-[#D1CAC2] hover:text-white transition-colors duration-300" aria-label="LinkedIn Profile">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#4B4237] text-center text-sm text-[#6B6258]">
          <p>&copy; 2025 Zeeshan Raja. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;