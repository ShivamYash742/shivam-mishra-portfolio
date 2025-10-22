import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { siteData } from '../content/siteData';

const Skills = () => {
  const { skills } = siteData;

  const skillCategories = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'Version Control', items: skills.versionControl },
    { title: 'Authentication', items: skills.authentication },
    { title: 'ML Frameworks', items: skills.mlFrameworks }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Skills</h2>
          <p className="text-xl text-gray-500">Technical Proficiency</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill, skillIdx) => (
                      <Badge 
                        key={skillIdx} 
                        variant="secondary" 
                        className="bg-zinc-800 text-gray-300 hover:bg-zinc-700 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
