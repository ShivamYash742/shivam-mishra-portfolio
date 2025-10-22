import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Medal } from 'lucide-react';
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

  const iconConfig = [
    { Icon: Trophy, gradient: 'from-yellow-500 to-orange-500', bgGradient: 'from-yellow-100 to-orange-100' },
    { Icon: Star, gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-100 to-pink-100' },
    { Icon: Award, gradient: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-100 to-cyan-100' },
    { Icon: Medal, gradient: 'from-green-500 to-emerald-500', bgGradient: 'from-green-100 to-emerald-100' }
  ];

  return (
    <section id="achievements" className="px-6 py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4">Achievements</h2>
          <p className="text-xl text-orange-600 font-semibold">Recognition & milestones</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {achievements.map((achievement, idx) => {
            const config = iconConfig[idx % iconConfig.length];
            const Icon = config.Icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`bg-gradient-to-br ${config.bgGradient} border-2 border-orange-200 rounded-xl p-6 hover:border-orange-400 transition-all duration-300 flex items-start gap-4 group hover:shadow-2xl hover:scale-105`}
              >
                <div className={`bg-gradient-to-br ${config.gradient} p-3 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <p className="text-gray-800 text-sm leading-relaxed font-semibold">{achievement}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
