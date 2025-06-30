import React from 'react';
import { Camera, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-[#86A027] text-white">
      <div className="container-custom section-padding">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
              <Camera size={24} className="text-[#86A027]" />
            </div>
            <div>
              <div className="font-beezle text-xl font-medium">Skyboundstories</div>
              <div className="text-white/80 text-sm">Wedding Photography</div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:hello@skyboundstories.com"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <Mail size={18} className="text-white" />
            </a>
            <a
              href="https://instagram.com/skyboundstories"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
            >
              <Instagram size={18} className="text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center text-white/80 text-sm">
            <span>© 2024 Skyboundstories Photography. Made with</span>
            <Heart size={14} className="mx-1 text-white fill-current" />
            <span>for love stories</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
