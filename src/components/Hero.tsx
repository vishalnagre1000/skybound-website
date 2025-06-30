import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/images/poster.jpg" // optional: add fallback image to public/images/
        >
          <source src="/videos/v.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4 pt-20">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-beezle text-5xl md:text-7xl font-medium text-white mb-6 leading-tight">
            From Vows to Forever
            <span className="block text-[#86A027] italic">We’re With You.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
            Elegant wedding photography that tells your unique love story with timeless beauty and artistic vision
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToGallery} className="btn-primary">
              View Portfolio
            </button>
            <a
              href="#contact"
              className="btn-secondary bg-white/10 border-white text-white hover:bg-white hover:text-gray-900"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={scrollToGallery}
          className="text-white/70 hover:text-white transition-colors duration-300 animate-float"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
