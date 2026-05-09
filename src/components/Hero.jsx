import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code, Layout } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-6">
            <Sparkles className="text-brand-purple w-4 h-4" />
            <span className="text-sm font-medium text-slate-300">Next-Gen App Development</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl mb-6 leading-tight">
            Building <span className="gradient-text">Smart Digital Solutions</span> for the Future
          </h1>
          
          <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
            LUMIQ Labs is a student-founded startup dedicated to turning visionary ideas into intelligent, high-performance applications.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-brand-purple text-white rounded-2xl font-bold flex items-center gap-2 neon-glow transition-all"
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass text-white rounded-2xl font-bold transition-all border border-white/10 text-center"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Main Visual Element */}
          <div className="relative z-20 animate-float">
            <div className="glass-dark p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                  <Code className="text-brand-purple" />
                </div>
                <div>
                  <div className="h-4 w-32 bg-white/10 rounded mb-2" />
                  <div className="h-3 w-20 bg-white/5 rounded" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-32 w-full bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-2xl border border-white/5" />
                <div className="flex gap-2">
                  <div className="h-8 w-24 bg-brand-purple/30 rounded-lg" />
                  <div className="h-8 w-24 bg-white/5 rounded-lg" />
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass p-4 rounded-2xl border border-brand-cyan/30 flex items-center gap-3 shadow-xl"
              >
                <div className="w-10 h-10 rounded-full bg-brand-cyan/20 flex items-center justify-center">
                  <Layout className="text-brand-cyan" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Design System</p>
                  <p className="text-sm font-bold text-white">LUMIQ Core</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Decorative Backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full rotate-12" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-white/10 rounded-full -rotate-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
