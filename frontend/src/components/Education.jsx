import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardHeader, CardTitle } from './ui/card';
import { siteData } from '../content/siteData';

const Education = () => {
  const { profile } = siteData;
  const { education } = profile;

  return (
    <section id="education" className="px-6 py-20 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">Education</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 group hover:shadow-2xl hover:scale-105">
            <CardHeader>
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-br from-green-500 to-blue-500 p-4 rounded-xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-gray-800 text-2xl mb-2 font-heading group-hover:text-blue-600 transition-colors duration-300 font-bold">{education.degree}</CardTitle>
                  <p className="text-blue-600 text-lg mb-4 font-bold">{education.institute}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-700 text-sm bg-gradient-to-r from-blue-100 to-cyan-100 px-4 py-2 rounded-full border-2 border-blue-200 font-semibold">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      {education.timeline}
                    </div>
                    <div className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 px-5 py-2 rounded-full shadow-lg">
                      <Award className="h-5 w-5 text-white" />
                      <span className="text-white font-bold">GPA: {education.gpa}</span>
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
