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
    <section id="experience" className="min-h-screen px-6 py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Experience</h2>
          <p className="text-xl text-blue-600 font-semibold">Professional journey</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-purple-500 before:via-pink-500 before:to-blue-500 before:rounded-full"
        >
          {experience.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -translate-x-[6px] shadow-lg shadow-purple-500/50 ring-4 ring-white" />
              
              <Card className="bg-gradient-to-br from-white to-purple-50/50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 group hover:shadow-2xl hover:scale-105">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <CardTitle className="text-gray-800 text-xl mb-1 font-heading group-hover:text-purple-600 transition-colors duration-300 font-bold">{exp.role}</CardTitle>
                      <CardDescription className="text-purple-600 font-semibold text-base">{exp.org}</CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-700 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full border-2 border-purple-200 font-semibold">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      {exp.timeline}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="text-gray-700 text-sm flex items-start gap-3 leading-relaxed font-medium">
                        <span className="text-purple-500 mt-1.5 text-lg font-bold">•</span>
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
