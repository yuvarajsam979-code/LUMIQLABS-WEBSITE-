import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    title: 'Nexus AI Dashboard',
    category: 'AI Solution',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    desc: 'An intelligent data analytics platform for modern enterprises.',
  },
  {
    title: 'EcoFlow Mobile App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    desc: 'Helping users track and reduce their carbon footprint daily.',
  },
  {
    title: 'LUMIQ Design System',
    category: 'Open Source',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800',
    desc: 'A comprehensive UI kit for building futuristic web apps.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-4">Our <span className="gradient-text">Project Showcase</span></h2>
            <p className="text-slate-400">
              Explore our latest works ranging from complex AI dashboards to intuitive mobile applications.
            </p>
          </div>
          <button className="px-8 py-3 glass rounded-xl text-white font-bold border border-white/10 hover:bg-white/5 transition-all">
            View All Projects
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-dark border border-white/5"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
              </div>

              {/* Overlay Content (Hidden by default) */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-dark/40 backdrop-blur-sm">
                <button className="p-3 bg-brand-purple rounded-full text-white hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </button>
                <button className="p-3 bg-white/10 rounded-full text-white hover:scale-110 transition-transform backdrop-blur-md">
                  <Github size={20} />
                </button>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <span className="text-xs font-bold text-brand-purple uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{project.desc}</p>
                <button className="flex items-center gap-2 text-sm font-bold text-brand-cyan hover:gap-3 transition-all">
                  View Details <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ArrowUpRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export default Projects;
