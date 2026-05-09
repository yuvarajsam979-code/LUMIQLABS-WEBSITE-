import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Palette, Smartphone, Cpu, Megaphone, ArrowUpRight, Sparkles } from 'lucide-react';

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
  const [showIdeaInfo, setShowIdeaInfo] = useState(false);

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
            onMouseEnter={() => setShowIdeaInfo(true)}
            onMouseLeave={() => setShowIdeaInfo(false)}
            onClick={() => setShowIdeaInfo(!showIdeaInfo)}
            className="p-8 rounded-3xl bg-gradient-to-br from-brand-purple to-brand-cyan flex flex-col justify-center items-center text-center group cursor-pointer relative overflow-hidden min-h-[320px]"
          >
            <AnimatePresence mode="wait">
              {!showIdeaInfo ? (
                <motion.div
                  key="front"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl mb-4 text-white">Have a Unique Idea?</h3>
                  <p className="text-white/80 mb-8">We love working on experimental and innovative projects.</p>
                  <button className="px-8 py-3 bg-white text-brand-purple rounded-xl font-bold hover:scale-105 transition-transform shadow-xl flex items-center gap-2">
                    Request Project <ArrowUpRight size={18} />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="back"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col items-center"
                >
                  <h3 className="text-2xl mb-4 text-white">Experimental & Innovative</h3>
                  <p className="text-white/90 mb-6 text-sm leading-relaxed px-2">
                    From MVP development to R&D and rapid prototyping, we help founders validate innovative concepts. Our team specializes in solving complex technical hurdles for unconventional ideas.
                  </p>
                  <div className="flex flex-col gap-3 w-full">
                    <a 
                      href="#idea-submission"
                      onClick={(e) => e.stopPropagation()}
                      className="px-8 py-3 bg-white text-brand-purple rounded-xl font-bold hover:scale-105 transition-all shadow-xl text-center"
                    >
                      Let's Build It
                    </a>
                    <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold">
                      Tap to go back
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Subtle background animation */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
