import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { siteData } from '../content/siteData';

const Education = () => {
  const { profile } = siteData;
  const { education } = profile;

  return (
    <section id="education" className="px-6 py-20 bg-black">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition-all duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-white text-2xl mb-2">{education.degree}</CardTitle>
                  <p className="text-gray-400 text-lg mb-3">{education.institute}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      {education.timeline}
                    </div>
                    <Badge variant="secondary" className="bg-zinc-800 text-white">
                      GPA: {education.gpa}
                    </Badge>
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
