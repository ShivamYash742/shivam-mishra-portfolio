import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { siteData } from '../content/siteData';

const Footer = () => {
  const { profile } = siteData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-6">
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-gray-500 hover:text-white transition-colors duration-300"
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
