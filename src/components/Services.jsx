import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Cpu, Megaphone, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'App Development',
    desc: 'High-performance mobile applications built with React Native and Flutter for iOS and Android.',
    icon: Smartphone,
    color: 'from-blue-500/20 to-brand-cyan/20',
  },
  {
    title: 'UI/UX Design',
    desc: 'Premium user experiences and modern interfaces that focus on usability and aesthetics.',
    icon: Palette,
    color: 'from-brand-purple/20 to-pink-500/20',
  },
  {
    title: 'Web Development',
    desc: 'Modern, responsive, and SEO-optimized web platforms built with the latest tech stacks.',
    icon: Code2,
    color: 'from-brand-cyan/20 to-blue-500/20',
  },
  {
    title: 'AI Solutions',
    desc: 'Integrating intelligent features and machine learning models to automate your business.',
    icon: Cpu,
    color: 'from-brand-purple/20 to-indigo-500/20',
  },
  {
    title: 'Branding & Marketing',
    desc: 'Strategic brand identity development and digital marketing to scale your startup.',
    icon: Megaphone,
    color: 'from-orange-500/20 to-red-500/20',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our <span className="gradient-text">Core Services</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We provide a comprehensive range of digital services tailored to help startups and businesses thrive in the modern era.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl glass-dark border border-white/5 hover:border-brand-purple/50 transition-all duration-500"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-2xl mb-4 group-hover:text-brand-purple transition-colors">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-6">{service.desc}</p>
              
              <button className="flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                Explore Service <ArrowUpRight size={16} />
              </button>
            </motion.div>
          ))}
          
          {/* Custom CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-brand-purple to-brand-cyan flex flex-col justify-center items-center text-center group"
          >
            <h3 className="text-2xl mb-4 text-white">Have a Unique Idea?</h3>
            <p className="text-white/80 mb-8">We love working on experimental and innovative projects.</p>
            <button className="px-8 py-3 bg-white text-brand-purple rounded-xl font-bold hover:scale-105 transition-transform shadow-xl">
              Request Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
