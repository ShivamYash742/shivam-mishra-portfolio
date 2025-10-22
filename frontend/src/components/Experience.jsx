import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
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
    <section id="experience" className="min-h-screen px-6 py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">Experience</h2>
          <p className="text-xl text-cyan-400 font-medium">Professional journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-blue-500 before:to-purple-500"
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full -translate-x-[5px] shadow-lg shadow-cyan-500/50" />
              
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-lg hover:shadow-cyan-500/10">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <CardTitle className="text-white text-xl mb-1 font-heading group-hover:text-cyan-400 transition-colors duration-300">{exp.role}</CardTitle>
                      <CardDescription className="text-cyan-400 font-medium">{exp.org}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 bg-slate-700/50 px-3 py-1.5 rounded-full border border-slate-600/50">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      {exp.timeline}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-gray-400 text-sm flex items-start gap-3 leading-relaxed">
                        <span className="text-cyan-400 mt-1.5 text-lg">•</span>
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
