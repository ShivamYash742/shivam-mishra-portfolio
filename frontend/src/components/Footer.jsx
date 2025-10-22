import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { siteData } from '../content/siteData';

const Footer = () => {
  const { profile } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm flex items-center gap-2">
            © {currentYear} <span className="text-cyan-400 font-semibold">{profile.name}</span>. 
            <span className="hidden sm:inline">Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-gray-500 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
