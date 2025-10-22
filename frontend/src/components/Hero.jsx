import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { siteData } from '../content/siteData';

const Hero = () => {
  const { profile } = siteData;

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {profile.name}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-400"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {profile.title}
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-500 max-w-2xl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {profile.tagline}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-colors duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-gray-700 text-white hover:bg-gray-900 transition-colors duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-gray-500 hover:text-white transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
