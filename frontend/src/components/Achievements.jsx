import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Badge } from './ui/badge';
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

  return (
    <section id="achievements" className="px-6 py-20 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-xl text-gray-500">Recognition & milestones</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-all duration-300 flex items-start gap-4"
            >
              <div className="bg-zinc-800 p-2 rounded-lg shrink-0">
                <Award className="h-5 w-5 text-white" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{achievement}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
