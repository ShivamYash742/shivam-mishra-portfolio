import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { siteData } from '../content/siteData';

const Experience = () => {
  const { experience } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="min-h-screen px-6 py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-gray-500">Professional journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-zinc-800"
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-2 h-2 bg-white rounded-full -translate-x-[3.5px]" />
              
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{exp.role}</CardTitle>
                      <CardDescription className="text-gray-400">{exp.org}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Briefcase className="h-4 w-4" />
                      {exp.timeline}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-white mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
