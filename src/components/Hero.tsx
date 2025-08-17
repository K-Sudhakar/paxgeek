import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Empower your digital presence
      </motion.h1>
      <p>We build performant and accessible web experiences.</p>
      <button>Get Started</button>
    </section>
  );
};

export default Hero;
