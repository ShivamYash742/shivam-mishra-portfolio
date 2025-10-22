import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { siteData } from '../content/siteData';

const Projects = () => {
  const { projects } = siteData;
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(selectedTag));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const projectGradients = [
    'from-purple-500/20 to-pink-500/20',
    'from-blue-500/20 to-cyan-500/20'
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Projects</h2>
          </div>
          <p className="text-xl text-gray-700 font-medium">Building innovative solutions with cutting-edge technology</p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Filter className="h-5 w-5 text-purple-600 mt-2" />
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className={selectedTag === tag 
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg shadow-purple-500/30 font-semibold" 
                : "border-2 border-purple-300 text-purple-700 hover:bg-purple-50 hover:border-purple-500 font-semibold"}
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className={`bg-gradient-to-br ${projectGradients[idx % projectGradients.length]} backdrop-blur-sm border-2 border-white/50 hover:border-purple-300 transition-all duration-300 h-full flex flex-col group hover:shadow-2xl hover:scale-105`}>
                <CardHeader>
                  <CardTitle className="text-gray-800 text-2xl font-heading group-hover:text-purple-600 transition-colors duration-300 font-bold">{project.name}</CardTitle>
                  <CardDescription className="text-gray-700 mt-2 leading-relaxed font-medium">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIdx) => (
                      <Badge 
                        key={techIdx} 
                        variant="outline" 
                        className="border-gray-300 text-gray-700 bg-white/70 hover:border-purple-400 hover:text-purple-700 hover:bg-white transition-all duration-200 font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-2 border-purple-500 text-purple-700 hover:bg-purple-50 font-semibold"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 text-gray-800">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-heading bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">{project.name}</DialogTitle>
                        <DialogDescription className="text-gray-700 text-base mt-4 leading-relaxed font-medium">
                          {project.summary}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="text-sm font-bold mb-3 text-purple-700">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-white text-gray-700 border border-purple-200 font-medium">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                          {project.links.github !== '#' && (
                            <Button variant="outline" size="sm" className="border-2 border-purple-500 hover:bg-purple-50 text-purple-700 font-semibold" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.links.live !== '#' && (
                            <Button variant="outline" size="sm" className="border-2 border-blue-500 hover:bg-blue-50 text-blue-700 font-semibold" asChild>
                              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
