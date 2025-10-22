import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
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
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm"
          >
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm text-purple-700 font-semibold">Available for opportunities</span>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 
              className="text-6xl md:text-8xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {profile.name}
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 font-semibold"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {profile.title}
            </motion.p>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {profile.tagline}
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white border-0 shadow-xl shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 hover:border-purple-700 transition-all duration-300 font-semibold"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a 
              href={profile.links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors duration-300 transform hover:scale-125"
              aria-label="GitHub"
            >
              <Github className="h-7 w-7" />
            </a>
            <a 
              href={profile.links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-7 w-7" />
            </a>
            <a 
              href={`mailto:${profile.email}`}
              className="text-gray-600 hover:text-pink-600 transition-colors duration-300 transform hover:scale-125"
              aria-label="Email"
            >
              <Mail className="h-7 w-7" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
