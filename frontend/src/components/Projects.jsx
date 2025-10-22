import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { siteData } from '../content/siteData';

const Projects = () => {
  const { projects } = siteData;
  const [selectedTag, setSelectedTag] = useState('All');

  // Get all unique tags
  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  // Filter projects
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
    <section id="projects" className="min-h-screen px-6 py-20 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-500">Building innovative solutions</p>
        </motion.div>

        {/* Filter Tags */}
        <motion.div 
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Filter className="h-5 w-5 text-gray-500 mt-2" />
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTag(tag)}
              className={selectedTag === tag 
                ? "bg-white text-black hover:bg-gray-200" 
                : "border-gray-700 text-gray-400 hover:bg-gray-900"}
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
              <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-600 transition-all duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">{project.name}</CardTitle>
                  <CardDescription className="text-gray-400 mt-2">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech, techIdx) => (
                      <Badge 
                        key={techIdx} 
                        variant="outline" 
                        className="border-zinc-700 text-gray-300"
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
                        className="border-gray-700 text-white hover:bg-gray-800"
                      >
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-zinc-900 border-zinc-800 text-white">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{project.name}</DialogTitle>
                        <DialogDescription className="text-gray-400 text-base mt-4">
                          {project.summary}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 mt-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2 text-gray-300">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, i) => (
                              <Badge key={i} variant="secondary" className="bg-zinc-800 text-gray-300">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                          {project.links.github !== '#' && (
                            <Button variant="outline" size="sm" className="border-gray-700" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.links.live !== '#' && (
                            <Button variant="outline" size="sm" className="border-gray-700" asChild>
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
                      className="text-gray-400 hover:text-white"
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
                      className="text-gray-400 hover:text-white"
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
