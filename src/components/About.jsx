import { motion } from 'framer-motion';
import { Users, Lightbulb, Target, Rocket } from 'lucide-react';

const stats = [
  { label: 'Founded by Students', icon: Users, color: 'text-brand-purple' },
  { label: 'Innovative Mindset', icon: Lightbulb, color: 'text-brand-cyan' },
  { label: 'Goal Oriented', icon: Target, color: 'text-brand-purple' },
  { label: 'Future Ready', icon: Rocket, color: 'text-brand-cyan' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-8">
              Innovating Ideas into <br />
              <span className="gradient-text">Intelligent Applications</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                LUMIQ Labs started with a simple vision: to bridge the gap between creative student innovation and professional-grade software development. 
              </p>
              <p>
                As a student-founded startup, we bring fresh perspectives, rapid adaptability, and a deep passion for emerging technologies. Our mission is to empower businesses and individuals through cutting-edge digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                    <stat.icon size={20} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{stat.label}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="mt-12 flex items-center gap-2 text-brand-purple font-bold group"
            >
              Learn More about our story 
              <div className="w-10 h-[1px] bg-brand-purple group-hover:w-16 transition-all" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="gradient-border rounded-3xl rotate-3">
              <div className="bg-brand-deep rounded-[calc(1.5rem-1px)] p-2">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team Collaboration" 
                  className="rounded-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border border-white/10 hidden md:block">
              <p className="text-3xl font-bold text-white mb-1">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Innovation Focus</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
