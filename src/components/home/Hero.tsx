import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); // Parallax effect
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('main-content');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://www.sabangmeraukenews.com/foto_berita/2023/11/2023-11-28-catat-inilah-destinasi-kawasan-kuliner-di-kota-pekanbaru-dari-yang-legendaris-sampai-kekinian.0')",
          transform: `translateY(${offset}px)`,
          filter: 'brightness(0.7)',
        }}
      />

      {/* Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          Welcome to Pekanbaru
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 animate-fade-in-delayed">
          Discover the vibrant capital of Riau Province, where tradition meets modernity
        </p>
        <button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 animate-fade-in-delayed-more"
          onClick={scrollToContent}
        >
          Explore Pekanbaru
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;