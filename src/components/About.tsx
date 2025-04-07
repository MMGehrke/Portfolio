import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Network Security',
    'Ethical Hacking',
    'Threat Analysis',
    'Incident Response',
    'Penetration Testing',
    'Security Architecture',
    'Cryptography',
    'Risk Assessment',
  ];

  return (
    <section id="about" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-white"
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-300 mb-6">
              I am a dedicated cybersecurity graduate student at the University of London, specializing in network security and ethical hacking. My academic journey has equipped me with comprehensive knowledge in various aspects of cybersecurity, from network defense to threat analysis.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              My research focuses on emerging threats and innovative defense mechanisms. I am particularly interested in developing practical solutions to real-world security challenges while maintaining a strong theoretical foundation.
            </p>
            <p className="text-lg text-gray-300">
              Through my studies and hands-on experience, I have developed expertise in multiple security domains, enabling me to approach security challenges from various perspectives and implement comprehensive solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card bg-dark-light"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-2"
                >
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-300">{skill}</span>
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