import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, MapPin, Send, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Web Development',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hello LUMIQ Labs!%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919342692340?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Let's Build Something <span className="gradient-text">Exceptional</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
              Have a project in mind or just want to say hi? Reach out to us and let's start a conversation.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'hello@lumiqlabs.com', color: 'text-brand-purple' },
                { icon: Phone, label: 'Call Us', value: '+91 93426 92340 / 90872 29991', color: 'text-brand-cyan' },
                { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', color: 'text-brand-purple' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className={`p-4 rounded-2xl bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-xl font-bold text-white">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-6 mt-12">
              <a 
                href="https://www.instagram.com/lumiqlabs?igsh=a29zNHE2ZTloOTh5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-purple transition-all"
              >
                <Instagram size={20} />
              </a>
              {[Linkedin, Mail].map((Icon, i) => (
                <button key={i} className="w-12 h-12 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-purple transition-all">
                  <Icon size={20} />
                </button>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border border-white/10"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Subject</label>
                <select 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple transition-all appearance-none"
                >
                  <option className="bg-brand-dark" value="Web Development">Web Development</option>
                  <option className="bg-brand-dark" value="Mobile App">Mobile App</option>
                  <option className="bg-brand-dark" value="UI/UX Design">UI/UX Design</option>
                  <option className="bg-brand-dark" value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 ml-1">Your Message</label>
                <textarea 
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-purple text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform neon-glow"
              >
                Send Message via WhatsApp <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
