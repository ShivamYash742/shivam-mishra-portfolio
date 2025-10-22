import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Code2, Palette, Server, Database, GitBranch, Shield, Brain } from 'lucide-react';
import { siteData } from '../content/siteData';

const Skills = () => {
  const { skills } = siteData;

  const skillCategories = [
    { title: 'Languages', items: skills.languages, icon: Code2, color: 'cyan' },
    { title: 'Frontend', items: skills.frontend, icon: Palette, color: 'blue' },
    { title: 'Backend', items: skills.backend, icon: Server, color: 'violet' },
    { title: 'Databases', items: skills.databases, icon: Database, color: 'emerald' },
    { title: 'Version Control', items: skills.versionControl, icon: GitBranch, color: 'orange' },
    { title: 'Authentication', items: skills.authentication, icon: Shield, color: 'rose' },
    { title: 'ML Frameworks', items: skills.mlFrameworks, icon: Brain, color: 'purple' }
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

  const getIconColorClasses = (color) => {
    const colors = {
      cyan: 'text-cyan-400 bg-cyan-500/10',
      blue: 'text-blue-400 bg-blue-500/10',
      violet: 'text-violet-400 bg-violet-500/10',
      emerald: 'text-emerald-400 bg-emerald-500/10',
      orange: 'text-orange-400 bg-orange-500/10',
      rose: 'text-rose-400 bg-rose-500/10',
      purple: 'text-purple-400 bg-purple-500/10'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">Skills</h2>
          <p className="text-xl text-cyan-400 font-medium">Technical Proficiency</p>
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
                <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm group hover:shadow-lg hover:shadow-cyan-500/10">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${getIconColorClasses(category.color)} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <CardTitle className="text-white text-lg font-heading">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIdx) => (
                        <Badge 
                          key={skillIdx} 
                          variant="secondary" 
                          className="bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-200"
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
