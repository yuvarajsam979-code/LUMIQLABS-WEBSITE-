import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO at TechStream',
    text: 'LUMIQ Labs delivered an exceptional mobile app that exceeded our expectations. Their student-led team is incredibly talented and professional.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'David Miller',
    role: 'Founder of GreenStep',
    text: 'Working with LUMIQ was a breeze. They understood our vision perfectly and built a website that truly represents our eco-friendly mission.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Emily Watson',
    role: 'Product Manager at Innovate',
    text: 'The UI/UX design they provided was next-level. Our users love the new interface, and our engagement rates have skyrocketed.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What Our <span className="gradient-text">Clients Say</span></h2>
          <p className="text-slate-400">Trust from innovative companies and startups around the world.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl glass-dark border border-white/5 relative group hover:border-brand-purple/30 transition-all"
            >
              <Quote className="absolute top-6 right-6 text-brand-purple/20 group-hover:text-brand-purple/40 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="fill-brand-purple text-brand-purple" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-8 italic">"{item.text}"</p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-purple/30 object-cover"
                />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
