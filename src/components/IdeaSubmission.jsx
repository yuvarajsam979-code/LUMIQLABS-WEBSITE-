import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Send, Sparkles, X } from 'lucide-react';

const IdeaSubmission = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    budget: 'Under ₹50k',
    contact: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `🚀 New Project Idea for LUMIQ Labs!%0A%0A*Project:* ${formData.projectName}%0A*Description:* ${formData.description}%0A*Budget:* ${formData.budget}%0A*Contact:* ${formData.contact}`;
    window.open(`https://wa.me/919342692340?text=${text}`, '_blank');
    setIsOpen(false);
    setFormData({ projectName: '', description: '', budget: 'Under ₹50k', contact: '' });
  };

  return (
    <section id="idea-submission" className="py-24 relative overflow-hidden bg-brand-purple/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-dark p-12 md:p-20 rounded-[50px] border border-white/10 relative overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-brand-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Lightbulb className="text-brand-purple" size={32} />
            </div>
            
            <h2 className="text-4xl md:text-6xl mb-6 font-display">
              Have a <span className="gradient-text">Brilliant Idea?</span>
            </h2>
            
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-12">
              Don't let your vision stay a dream. Share your project idea with us, and let's discuss how LUMIQ Labs can turn it into a high-performance reality.
            </p>

            <button 
              onClick={() => setIsOpen(true)}
              className="px-12 py-5 bg-gradient-to-r from-brand-purple to-brand-cyan text-white rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-brand-purple/20 flex items-center gap-3 mx-auto"
            >
              Pitch Your Idea <Sparkles size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Submission Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-brand-dark/80 backdrop-blur-xl"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl glass-dark border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-slate-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold text-white mb-2">Tell us about it!</h3>
              <p className="text-slate-400 mb-8">Briefly describe your vision below.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">Project Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.projectName}
                    onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple"
                    placeholder="e.g. Next-Gen E-commerce"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 ml-1">The Idea</label>
                  <textarea 
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple h-32 resize-none"
                    placeholder="What problem are you solving?"
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">Estimated Budget</label>
                    <select 
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple appearance-none"
                    >
                      <option value="Under ₹50k">Under ₹50k</option>
                      <option value="₹50k - ₹2L">₹50k - ₹2L</option>
                      <option value="₹2L - ₹5L">₹2L - ₹5L</option>
                      <option value="₹5L+">₹5L+</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 ml-1">WhatsApp / Phone</label>
                    <input 
                      type="text" 
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({...formData, contact: e.target.value})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-brand-purple"
                      placeholder="+91..."
                    />
                  </div>
                </div>

                <button className="w-full py-4 bg-brand-purple text-white rounded-2xl font-bold neon-glow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                  Submit Idea <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default IdeaSubmission;
