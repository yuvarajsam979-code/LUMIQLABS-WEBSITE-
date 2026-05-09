import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Yuvaraj Vijayakumar',
    role: 'Founder & Director',
    image: '/yuvaraj.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/yuvaraj-v-4a4615371/',
      github: 'https://github.com/yuvarajsam979-code',
      instagram: 'https://www.instagram.com/yuavrajvijayakumar?igsh=MWJvM3E3cXY4cjAzbA%3D%3D',
      portfolio: 'https://adorable-seahorse-9a6ceb.netlify.app'
    }
  },
  {
    name: 'Senthamizh selvan.P',
    role: 'CO-founder & R&D head',
    image: '/senthamizh.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/senthamizh-selvan-dev/?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
      github: 'https://github.com/senthamizhselvan-404',
      instagram: 'https://www.instagram.com/tamzz.exe?igsh=NjhlcDF0NGkwbmU4'
    }
  },
  {
    name: 'Rithish Balakumar',
    role: 'CO-founder & CTO',
    image: '/rithish.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/rithish-bala-kumar-226028386',
      github: 'https://github.com/rithishrbk-crypto',
      instagram: 'https://www.instagram.com/kinda.rithiii?igsh=Y3JsMDFlb3ptOHVv'
    }
  },
  {
    name: 'Kaviraj',
    role: 'CO-FOUNDER AND CIO',
    image: '/kaviraj.jpg',
    socials: {
      linkedin: 'https://www.linkedin.com/in/kaviraj3728/',
      github: 'https://github.com/kaviyora',
      instagram: 'https://www.instagram.com/kaviyora?igsh=MXhpc2p3amt1enpxOA=='
    }
  },
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Meet Our <span className="gradient-text">Innovators</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A passionate team of student developers and designers working together to build the future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6 rounded-3xl overflow-hidden aspect-square border border-white/5 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Social Hover Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="glass p-3 rounded-2xl flex justify-center gap-4">
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin size={18} className="text-white hover:text-brand-cyan transition-colors" />
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                      <Github size={18} className="text-white hover:text-brand-purple transition-colors" />
                    </a>
                    <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
                      <Instagram size={18} className="text-white hover:text-brand-cyan transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-brand-purple transition-colors">{member.name}</h3>
                <p className="text-sm text-brand-cyan font-medium">{member.role}</p>
                {member.socials.portfolio && (
                  <a 
                    href={member.socials.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-xs font-bold text-white/40 hover:text-white uppercase tracking-widest transition-colors"
                  >
                    View Portfolio
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
