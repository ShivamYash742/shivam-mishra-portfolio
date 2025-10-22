import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { toast } from '../hooks/use-toast';
import { siteData } from '../content/siteData';

const Contact = () => {
  const { profile } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with backend integration
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-400">Let's build something amazing together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 font-heading">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 rounded-lg border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-white hover:text-cyan-400 transition-colors font-medium">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-3 rounded-lg border border-cyan-500/30 group-hover:border-cyan-500/50 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Phone</p>
                    <a href={`tel:${profile.phone}`} className="text-white hover:text-cyan-400 transition-colors font-medium">
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex gap-4 pt-4">
                <div className="h-1 flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white font-heading">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-slate-900/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-slate-900/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-slate-900/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20 resize-none transition-colors duration-300"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-cyan-500/30 transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
