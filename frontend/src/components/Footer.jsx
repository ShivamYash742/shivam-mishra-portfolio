import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { siteData } from '../content/siteData';

const Footer = () => {
  const { profile } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100 border-t-2 border-purple-200 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-700 text-sm flex items-center gap-2 font-medium">
            © {currentYear} <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">{profile.name}</span>. 
            <span className="hidden sm:inline">Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-purple-600 transition-all duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-gray-700 hover:text-pink-600 transition-all duration-300 transform hover:scale-125"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
