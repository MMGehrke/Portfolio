import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

const About = () => {
  const skills = [
    "Security Engineering",
    "Python Programming",
    "GRC Auditing",
    "NIST Security Frameworks",
  ];

  return (
    <section id="about" className="section relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400">A brief introduction to my background and expertise</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-dark/80 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Background</h3>
            <p className="text-gray-400 mb-4">
              I'm a cybersecurity graduate student transitioning from a patient-facing healthcare role to the cyber domain. My background has provided me with strong Python skills that complement my growing experience with AWS and DevOps practices.
            </p>
            <p className="text-gray-400">
              Currently focusing on projects that automate security engineering and GRC audit processes, I aim to expand my knowledge and expertise to take on more development projects in the future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-dark/80 backdrop-blur-sm p-6 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Core Competencies</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-dark/90 backdrop-blur-sm p-4 rounded-lg"
                >
                  <p className="text-white text-center">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 