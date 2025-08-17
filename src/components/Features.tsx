import React from 'react';
import { motion } from 'framer-motion';

const featureList = [
  {
    title: 'Fast',
    description: 'Optimized performance for every device.',
  },
  {
    title: 'Responsive',
    description: 'Looks great on any screen size.',
  },
  {
    title: 'Accessible',
    description: 'Built with inclusive design practices.',
  },
];

const Features: React.FC = () => {
  return (
    <section id="features">
      <h2>Features</h2>
      <div className="features">
        {featureList.map((feature) => (
          <motion.div
            key={feature.title}
            className="feature"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
