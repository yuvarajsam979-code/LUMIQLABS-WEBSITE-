import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Real-world project experience',
  'Flexible working hours',
  'Collaborative student environment',
  'Mentorship from industry pros',
];

const Recruitment = () => {
  const [isApplying, setIsApplying] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    role: 'Frontend Developer',
    experience: '',
    portfolio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Volunteer Application for LUMIQ Labs!%0A%0A*Name:* ${formData.name}%0A*Role:* ${formData.role}%0A*Experience:* ${formData.experience}%0A*Portfolio/Resume:* ${formData.portfolio}`;
    window.open(`https://wa.me/919342692340?text=${text}`, '_blank');
    setIsApplying(false);
  };

  return (
    <section id="careers" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glass p-12 md:p-20 rounded-[40px] border border-white/10 relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/20 blur-[80px] -mr-32 -mt-32" />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {!isApplying ? (
              <>
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/20 border border-brand-purple/30 mb-8">
                    <Sparkles size={16} className="text-brand-purple" />
                    <span className="text-sm font-bold text-brand-purple">We are Hiring Volunteers!</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl mb-6 leading-tight">
                    Join the <span className="gradient-text">LUMIQ Labs</span> Team
                  </h2>
                  
                  <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    We're looking for passionate students and innovators who want to build impactful products while learning the latest industry standards.
                  </p>

                  <div className="space-y-4 mb-10">
                    {benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-brand-cyan" />
                        <span className="text-slate-300 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setIsApplying(true)}
                      className="px-10 py-4 bg-white text-brand-dark rounded-2xl font-bold hover:scale-105 transition-transform"
                    >
                      Apply Now
                    </button>
                    <button className="px-10 py-4 glass text-white rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all">
                      View Open Roles
                    </button>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="hidden md:block"
                >
                  <div className="space-y-6">
                    {[
                      { title: 'Frontend Developer', type: 'React / Next.js' },
                      { title: 'UI/UX Designer', type: 'Figma / Motion' },
                      { title: 'Backend Engineer', type: 'Node / Supabase' },
                    ].map((role, i) => (
                      <div key={i} className="p-6 glass-dark rounded-3xl border border-white/5 hover:border-brand-purple/30 transition-all cursor-pointer group">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-brand-purple transition-colors">{role.title}</h4>
                            <p className="text-sm text-slate-500 mt-1">{role.type}</p>
                          </div>
                          <ArrowRight className="text-slate-600 group-hover:text-brand-purple transition-colors" />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="col-span-2 max-w-2xl mx-auto w-full"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-3xl font-bold text-white">Volunteer Application</h3>
                  <button onClick={() => setIsApplying(false)} className="text-slate-500 hover:text-white">Cancel</button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-400">Role Interested In</label>
                      <select 
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple appearance-none"
                      >
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="UI/UX Designer">UI/UX Designer</option>
                        <option value="Backend Engineer">Backend Engineer</option>
                        <option value="Mobile Developer">Mobile Developer</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Skills & Experience</label>
                    <textarea 
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple h-32 resize-none"
                      placeholder="Tell us about your technical skills..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Portfolio / Resume Link</label>
                    <input 
                      type="url" 
                      required
                      value={formData.portfolio}
                      onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple"
                      placeholder="https://..."
                    />
                  </div>

                  <button className="w-full py-4 bg-brand-purple text-white rounded-2xl font-bold neon-glow hover:scale-[1.02] transition-transform">
                    Submit Application via WhatsApp
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
