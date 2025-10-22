import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code2, Palette, Server, Database, GitBranch, Shield, Brain } from 'lucide-react';
import { siteData } from '../content/siteData';

const Skills = () => {
  const { skills } = siteData;

  const skillCategories = [
    { title: 'Languages', items: skills.languages, icon: Code2, gradient: 'from-purple-500 to-pink-500', bgGradient: 'from-purple-100 to-pink-100' },
    { title: 'Frontend', items: skills.frontend, icon: Palette, gradient: 'from-blue-500 to-cyan-500', bgGradient: 'from-blue-100 to-cyan-100' },
    { title: 'Backend', items: skills.backend, icon: Server, gradient: 'from-green-500 to-emerald-500', bgGradient: 'from-green-100 to-emerald-100' },
    { title: 'Databases', items: skills.databases, icon: Database, gradient: 'from-orange-500 to-red-500', bgGradient: 'from-orange-100 to-red-100' },
    { title: 'Version Control', items: skills.versionControl, icon: GitBranch, gradient: 'from-indigo-500 to-purple-500', bgGradient: 'from-indigo-100 to-purple-100' },
    { title: 'Authentication', items: skills.authentication, icon: Shield, gradient: 'from-pink-500 to-rose-500', bgGradient: 'from-pink-100 to-rose-100' },
    { title: 'ML Frameworks', items: skills.mlFrameworks, icon: Brain, gradient: 'from-violet-500 to-fuchsia-500', bgGradient: 'from-violet-100 to-fuchsia-100' }
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
    <section id="skills" className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">Skills</h2>
          <p className="text-xl text-purple-600 font-semibold">Technical Proficiency</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className={`bg-gradient-to-br ${category.bgGradient} border-2 border-transparent hover:border-purple-300 transition-all duration-300 group hover:shadow-2xl hover:scale-105`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-gray-800 text-lg font-heading font-bold">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIdx) => (
                        <Badge 
                          key={skillIdx} 
                          variant="secondary" 
                          className="bg-white/80 text-gray-700 hover:bg-white border border-gray-200 hover:border-purple-300 transition-all duration-200 font-medium"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
