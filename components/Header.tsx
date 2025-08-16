import React, { useState, useEffect, useCallback } from 'react';
import { navLinks } from '../constants.tsx';

// The main Header component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  // --- EVENT HANDLERS ---
  const handleNavClick = (href: string) => {
    setIsOpen(false); // Directly close the menu
    const targetElement = document.getElementById(href.substring(1));
    if (targetElement) {
        // Delay scroll slightly to allow menu close animation to start
        setTimeout(() => {
             targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }
  };
  
  // --- EFFECTS ---
  // Effect for background transparency on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for highlighting the active navigation link on scroll
  useEffect(() => {
    const sections = navLinks.map(link => document.getElementById(link.href.substring(1)));
    const handleActiveLink = () => {
      let current = '#home';
      // Add a 100px offset to trigger the active link a bit earlier
      const scrollY = window.scrollY + 100; 
      for (const section of sections) {
        if (section && section.offsetTop <= scrollY) {
          current = `#${section.id}`;
        }
      }
      setActiveLink(current);
    };
    
    window.addEventListener('scroll', handleActiveLink, { passive: true });
    handleActiveLink();
    return () => window.removeEventListener('scroll', handleActiveLink);
  }, []);
  
  // Effect to lock body scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reusable component for rendering nav links for both desktop and mobile
  const NavLinksComponent = ({ isMobile = false }) => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(link.href);
          }}
          className={`cursor-pointer transition-colors duration-300 ${
            isMobile
              ? 'text-4xl font-bold text-[#4B4237] hover:text-[#2C2722]'
              : `text-sm font-medium tracking-wider ${activeLink === link.href ? 'text-[#FDFBFA]' : 'text-[#D1CAC2] hover:text-[#FDFBFA]'}`
          }`}
        >
          {link.name}
          {!isMobile && activeLink === link.href && (
            <span className="block h-0.5 bg-[#FDFBFA] mt-1"></span>
          )}
        </a>
      ))}
    </>
  );

  return (
    <>
      {/* --- Main Header Bar --- */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#2C2722]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }} className="text-2xl font-black text-white transition-colors duration-300">
            ZR
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLinksComponent />
          </nav>
          
          <div className="hidden lg:flex items-center">
             <a href="http://linkedin.com/in/zeeshan-raja" target="_blank" rel="noopener noreferrer" className="text-[#D1CAC2] hover:text-white transition-colors duration-300" aria-label="LinkedIn Profile">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
             </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(true)} className="text-white focus:outline-none" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* --- Full-screen Mobile Menu --- */}
      <div className={`fixed inset-0 z-50 bg-[#F8F5F2]/60 backdrop-blur-xl text-[#4B4237] transition-transform duration-500 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="container mx-auto px-6 h-full flex flex-col">
             <div className="relative z-10 py-4 flex justify-between items-center">
                 <div className="text-2xl font-black text-[#4B4237]">ZR</div>
                 <button onClick={() => setIsOpen(false)} className="text-[#4B4237] focus:outline-none" aria-label="Close menu">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                     </svg>
                 </button>
             </div>
             <nav className="flex-grow flex flex-col items-center justify-center space-y-8 -mt-10">
                 <NavLinksComponent isMobile={true} />
                 <div className="pt-6">
                    <a href="http://linkedin.com/in/zeeshan-raja" target="_blank" rel="noopener noreferrer" className="text-[#4B4237] hover:text-[#2C2722]" aria-label="LinkedIn Profile">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                             <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </a>
                 </div>
             </nav>
         </div>
      </div>
    </>
  );
};

export default Header;