import React from 'react';

interface PreloaderProps {
  isExiting: boolean;
}

const Preloader = ({ isExiting }: PreloaderProps) => {
  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#2C2722] transition-opacity duration-500 ease-in-out ${isExiting ? 'opacity-0' : 'opacity-100'}`}
      aria-label="Loading page"
      role="status"
    >
      <div className="text-6xl font-black text-white mb-6">
        ZR
      </div>
      <div className="w-64 h-2 bg-[#4B4237] rounded-full overflow-hidden">
        <div className="h-full bg-white rounded-full animate-fill-bar"></div>
      </div>
    </div>
  );
};

export default Preloader;