import React from 'react';
import { Instagram, Linkedin, Github, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10">
                <Logo className="w-full h-full" />
              </div>
              <span className="text-xl font-display font-bold text-white">LUMIQ Labs</span>
            </a>
            <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
              Innovating ideas into intelligent applications. We are a student-founded startup dedicated to building the future of digital solutions.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/lumiqlabs?igsh=a29zNHE2ZTloOTh5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              {[Linkedin, Github, MessageCircle].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-lg glass flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Projects', 'Team', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-brand-purple transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} LUMIQ Labs. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-1">
            Made with <span className="text-brand-purple">💜</span> by LUMIQ Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
