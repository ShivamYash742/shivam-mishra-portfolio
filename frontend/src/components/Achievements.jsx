import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';
import { siteData } from '../content/siteData';

const Achievements = () => {
  const { achievements } = siteData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const icons = [Trophy, Star, Award, Trophy];

  return (
    <section id="achievements" className="px-6 py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">Achievements</h2>
          <p className="text-xl text-cyan-400 font-medium">Recognition & milestones</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-300 flex items-start gap-4 group backdrop-blur-sm hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-2.5 rounded-lg border border-cyan-500/30 shrink-0 group-hover:border-cyan-500/50 transition-colors duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-cyan-400" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
