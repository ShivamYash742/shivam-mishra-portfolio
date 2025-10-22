import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
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
    <section id="contact" className="min-h-screen px-6 py-20 bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-700 font-medium">Let's build something amazing together</p>
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
              <h3 className="text-2xl font-bold text-gray-800 mb-6 font-heading">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4 group p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-lg shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-gray-800 hover:text-purple-600 transition-colors font-bold">
                      {profile.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 group p-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-lg shadow-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">Phone</p>
                    <a href={`tel:${profile.phone}`} className="text-gray-800 hover:text-blue-600 transition-colors font-bold">
                      {profile.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <p className="text-gray-700 leading-relaxed font-medium">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex gap-2 pt-4">
                <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
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
            <Card className="bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300 shadow-xl">
              <CardHeader>
                <CardTitle className="text-gray-800 font-heading font-bold">Send a Message</CardTitle>
                <CardDescription className="text-gray-700 font-medium">Fill out the form below and I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-2 border-purple-200 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20 transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white border-2 border-purple-200 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20 transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white border-2 border-purple-200 text-gray-800 focus:border-purple-500 focus:ring-purple-500/20 resize-none transition-colors duration-300"
                      placeholder="Your message..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white border-0 shadow-xl shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 font-semibold"
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
