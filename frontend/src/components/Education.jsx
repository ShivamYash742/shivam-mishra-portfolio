import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { siteData } from '../content/siteData';

const Education = () => {
  const { profile } = siteData;
  const { education } = profile;

  return (
    <section id="education" className="px-6 py-20 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-xl hover:shadow-cyan-500/10">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 rounded-lg border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors duration-300">
                  <GraduationCap className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-white text-2xl mb-2 font-heading group-hover:text-cyan-400 transition-colors duration-300">{education.degree}</CardTitle>
                  <p className="text-cyan-400 text-lg mb-4 font-medium">{education.institute}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm bg-slate-700/50 px-3 py-1.5 rounded-full border border-slate-600/50">
                      <Calendar className="h-4 w-4 text-cyan-400" />
                      {education.timeline}
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-1.5 rounded-full border border-cyan-500/30">
                      <Award className="h-4 w-4 text-cyan-400" />
                      <span className="text-white font-semibold">GPA: {education.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
