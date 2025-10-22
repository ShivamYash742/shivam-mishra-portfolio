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

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-cyan-400" />
            <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</h2>
          </div>
          <p className="text-xl text-gray-400">Building innovative solutions with cutting-edge technology</p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Filter className="h-5 w-5 text-cyan-400 mt-2" />
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className={selectedTag === tag 
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/30" 
                : "border-slate-700 text-gray-400 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-500/50"}
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
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col backdrop-blur-sm group hover:shadow-xl hover:shadow-cyan-500/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl font-heading group-hover:text-cyan-400 transition-colors duration-300">{project.name}</CardTitle>
                  <CardDescription className="text-gray-400 mt-2 leading-relaxed">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIdx) => (
                      <Badge 
                        key={techIdx} 
                        variant="outline" 
                        className="border-slate-600/50 text-gray-300 bg-slate-700/30 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-200"
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
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-slate-900 border-slate-700 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-heading bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{project.name}</DialogTitle>
                        <DialogDescription className="text-gray-400 text-base mt-4 leading-relaxed">
                          {project.summary}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-3 text-cyan-400">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-slate-800 text-gray-300 border border-slate-700">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                          {project.links.github !== '#' && (
                            <Button variant="outline" size="sm" className="border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.links.live !== '#' && (
                            <Button variant="outline" size="sm" className="border-slate-700 hover:border-cyan-500/50 hover:text-cyan-400" asChild>
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
                  {project.links.github !== '#' && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.live !== '#' && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-gray-400 hover:text-cyan-400 hover:bg-slate-700/50"
                      asChild
                    >
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
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
