import { motion } from 'framer-motion';

const particles = Array.from({ length: 20 }, (_, index) => ({
  x: `${(index * 37) % 100}%`,
  y: `${(index * 61) % 100}%`,
  opacity: 0.1 + ((index * 7) % 5) / 10,
  scale: 0.5 + ((index * 11) % 15) / 10,
  duration: 10 + ((index * 13) % 10),
  delay: (index * 17) % 10,
  left: `${(index * 43) % 100}%`,
  top: `${(index * 29) % 100}%`,
}));

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-purple/30 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: particle.opacity,
            scale: particle.scale,
          }}
          animate={{
            y: [null, "-20%", "120%"],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
          }}
          style={{
            left: particle.left,
            top: particle.top,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
