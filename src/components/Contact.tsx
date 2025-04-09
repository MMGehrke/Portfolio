import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const Contact = () => {
  return (
    <section id="contact" className="section relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-white"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-4 bg-dark/80 backdrop-blur-sm p-8 rounded-lg"
        >
          <p className="text-lg text-white">
            If you wish to get in contact with me, please message me on LinkedIn
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/in/macoy-gehrke/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-primary transition-colors duration-200"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
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