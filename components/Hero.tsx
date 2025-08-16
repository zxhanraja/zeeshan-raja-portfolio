import React, { useState, useEffect, useCallback } from 'react';

// Using the user-provided video URL and a new poster image for smooth loading.
const DUBAI_VIDEO_URL = 'https://ik.imagekit.io/zgmzllqewo/108522-681143783.mp4?updatedAt=1755240067238';
const DUBAI_POSTER_URL = 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1920&auto=format&fit=crop';


// Phrases for the typing animation
const phrasesToRotate = [
  "A passionate Real Estate Agent.",
  "Finding Your Perfect Property in Dubai.",
  "Your Trusted Partner in Real Estate."
];

const Hero = () => {
  // --- STATE FOR TYPING ANIMATION ---
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150); // Time between ticks

  // --- TYPING LOGIC ---
  const tick = useCallback(() => {
    const i = loopNum % phrasesToRotate.length;
    const fullText = phrasesToRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Logic to switch between typing and deleting and control speed
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Pause at the end of a phrase
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500); // Pause before typing the next phrase
    } else {
      // Set typing/deleting speed
      const typingSpeed = 150 - Math.random() * 50;
      const deletingSpeed = 75;
      setDelta(isDeleting ? deletingSpeed : typingSpeed);
    }
  }, [isDeleting, loopNum, text]);
  
  // Effect to run the typing animation
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker); };
  }, [text, delta, tick]);

  // --- EVENT HANDLERS ---
  const handleDownload = () => {
    const resumeUrl = "https://ik.imagekit.io/zgmzllqewo/Zeeshan%20Raja%20Resume.pdf?updatedAt=1755191120786";
    const fileName = "Zeeshan-Raja-Resume.pdf";

    fetch(resumeUrl)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.blob();
      })
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch(err => {
        console.error("Failed to download resume:", err);
        window.open(resumeUrl, '_blank');
      });
  };

  const handleGetInTouchClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${DUBAI_POSTER_URL})` }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={DUBAI_VIDEO_URL}
        aria-hidden="true"
      >
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl text-center flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-4">
            Zeeshan Raja
          </h1>
          {/* Animated Subtitle */}
          <p className="text-base md:text-xl text-white/90 mb-8 max-w-2xl min-h-[56px] flex justify-center items-center">
             <span className="border-r-2 border-white/75 animate-blink pr-1">{text}</span>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="#contact" 
              onClick={handleGetInTouchClick}
              className="px-8 py-3 font-bold text-white bg-[#4B4237] rounded-full hover:bg-[#2C2722] transition-all duration-300 text-center shadow-lg transform hover:scale-105"
            >
              Get In Touch
            </a>
            <button
              onClick={handleDownload}
              className="px-8 py-3 font-bold text-[#4B4237] bg-white rounded-full hover:bg-gray-200 transition-all duration-300 text-center shadow-lg transform hover:scale-105"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;