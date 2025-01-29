import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Server, Database, Globe, ExternalLink, Send, Sparkles, Award, Users } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { supabase, supabaseEnabled } from './lib/supabase';
import { ShoppingCart, BrainCircuit, Layers, Wrench } from 'lucide-react';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!supabaseEnabled) {
      toast.error('Contact form is currently unavailable. Please try again later.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase!
        .from('contact_messages')
        .insert([formData]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 z-10 text-center"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Sabbir Hossen
          </motion.h1>
          <p className="text-xl md:text-3xl text-gray-300 mb-8">Full Stack Web Developer</p>
          <div className="flex justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/30"
            >
              Contact Me
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#portfolio" 
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-lg transition-all hover:bg-white/20"
            >
              View Work
            </motion.a>
          </div>
        </motion.div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <Sparkles className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-3xl font-bold mb-2">50+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <Users className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-3xl font-bold mb-2">30+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <Award className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-3xl font-bold mb-2">5+</h3>
              <p className="text-gray-300">Years Experience</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm"
            >
              <Code2 className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-gray-300">Repositories</p>
            </motion.div>
          </div>
        </div>
      </section>



      


{/* Services Section */}
<section id="services" className="py-24 bg-gradient-to-b from-white to-gray-100">
  <div className="container mx-auto px-6 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold text-gray-800 mb-12">🚀 My Services</h2>
      <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
        Transform your business with high-quality, AI-driven web solutions that are 
        optimized for speed, scalability, and user experience.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: Code2, title: 'Landing Pages', desc: 'Fast, modern, and responsive pages', price: '$50 - $100' },
          { icon: Server, title: 'Business Websites', desc: 'Professional sites tailored for brands', price: '$100 - $300' },
          { icon: ShoppingCart, title: 'E-commerce Stores', desc: 'Full-fledged online stores with payment integration', price: '$200+' },
          { icon: BrainCircuit, title: 'AI Features', desc: 'Smart automation & AI-powered web apps', price: '$150+' },
          { icon: Layers, title: 'Full-Stack Development', desc: 'Complete web solutions from idea to deployment', price: 'Custom Pricing' },
          { icon: Wrench, title: 'Website Optimization', desc: 'Speed, SEO & performance enhancements', price: 'Custom Pricing' }
        ].map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white/80 backdrop-blur-lg rounded-xl text-center shadow-md hover:shadow-xl transition-all border border-gray-200"
          >
            <service.icon className="w-14 h-14 mx-auto mb-6 text-blue-600" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <span className="text-lg font-bold text-blue-600 bg-blue-100 px-4 py-2 rounded-full">{service.price}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>
      

{/* About Section */}
<section id="about" className="py-20 bg-gradient-to-b from-white to-gray-100">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
        🚀 About Me
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 p-6 bg-white/80 backdrop-blur-md rounded-xl shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            I help businesses and individuals leverage AI-driven web solutions to 
            establish a powerful digital presence. With deep expertise in both frontend & backend development,  
            I create high-performance, scalable applications tailored for modern businesses.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            My work focuses on integrating cutting-edge AI, automation, and seamless user experiences  
            to give your brand a competitive advantage in the digital world.
          </p>
          <div className="flex flex-wrap gap-4">
            {['AI Development', 'Full-Stack Web Dev', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'TailwindCSS'].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold shadow-md transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Right Cards */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Code2, title: 'AI-Powered Web Apps', desc: 'Smart, automated & efficient' },
            { icon: Server, title: 'Scalable Backend', desc: 'Robust, secure & high-performance' },
            { icon: Database, title: 'Data Management', desc: 'Optimized for speed & efficiency' },
            { icon: Globe, title: 'Full-Stack Development', desc: 'From concept to deployment' }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/80 backdrop-blur-lg rounded-xl text-center shadow-md hover:shadow-xl transition-all border border-gray-200"
            >
              <item.icon className="w-14 h-14 mx-auto mb-4 text-blue-600" />
              <h3 className="font-semibold text-xl mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            Recent Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "A full-stack e-commerce solution with React and Node.js",
                image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
                link: "#"
              },
              {
                title: "Task Management App",
                description: "React-based project management tool with real-time updates",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
                link: "#"
              },
              {
                title: "Social Media Dashboard",
                description: "Analytics dashboard with MongoDB and Express",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
                link: "#"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href={project.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700"
                  >
                    View Project <ExternalLink className="w-4 h-4 ml-2" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="mailto:mdsabbirhossen251920@gmail.com" 
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-blue-600" />
                    <span>mdsabbirhossen251920@gmail.com</span>
                  </a>
                  <a 
                    href="https://github.com/DevelopwithSabbir" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-6 h-6 text-blue-600" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/md-sabbir-hossen-a27083322/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              <div>
                {!supabaseEnabled ? (
                  <div className="p-6 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Contact Form Temporarily Unavailable</h3>
                    <p className="text-yellow-700">
                      Please use the email address or social links to get in touch. The contact form will be available soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-70"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Sabbir Hossen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;