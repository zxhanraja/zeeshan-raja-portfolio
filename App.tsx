import React, { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Certifications from './components/Certifications.tsx';
import Experience from './components/Experience.tsx';
import Testimonials from './components/Testimonials.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import Preloader from './components/Preloader.tsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // This effect runs once on mount to set the initial theme
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // This effect applies the theme class to the HTML element and saves the preference
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const PRELOADER_DURATION = 2500; // Time the preloader is fully visible
    const FADE_OUT_DURATION = 500;  // Preloader fade-out animation time

    // Timer to start the fade-out/fade-in transition
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, PRELOADER_DURATION);

    // Timer to unmount the preloader after it has faded out
    const unmountTimer = setTimeout(() => {
      setIsLoading(false);
    }, PRELOADER_DURATION + FADE_OUT_DURATION);

    return () => {
      clearTimeout(readyTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <>
      {isLoading && <Preloader isExiting={isReady} />}
      <div className={`font-poppins bg-[#F8F5F2] text-[#4B4237] dark:bg-[#1C1A19] dark:text-[#D1CAC2] transition-opacity duration-700 ease-in ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Certifications />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;