import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Contact = () => {
  return (
    <section id="contact" className="section relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-400">Get in touch for opportunities and collaborations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-dark/80 backdrop-blur-sm rounded-lg p-8 text-center"
        >
          <p className="text-gray-400 mb-6">
            If you wish to get in contact with me, please message me on LinkedIn.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <LinkedinIcon className="h-8 w-8" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-8">
        2025 Macoy Gehrke. All rights reserved.
      </div>
    </section>
  );
};

export default Contact; 