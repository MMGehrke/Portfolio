import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';
import { CodeBracketIcon, ShieldCheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Security Hardening Script',
      description: 'A Python script that automates the process of hardening Windows and Linux systems based on CIS benchmarks.',
      technologies: ['Python', 'Windows', 'Linux', 'JSON'],
      icon: ShieldCheckIcon,
      link: 'https://github.com/MMGehrke/Automated-Security-Hardening'
    },
    {
      title: 'Custom GRC Dashboard',
      description: 'A web-based platform that streamlines healthcare GRC audits through dynamic regulatory standard switching, custom regulation storage, and EHR/CMS integration.',
      technologies: ['Python', 'React', 'PostgreSQL', 'FastAPI'],
      icon: MagnifyingGlassIcon,
      link: 'https://github.com/MMGehrke/HealthcareGRCDashboardBackend'
    },
    {
      title: 'File Encryption',
      description: 'The file encryption tool is a Python implementation that provides robust file encryption and decryption using AES-256-CBC from the cryptography library.',
      technologies: ['Python', 'Cryptography', 'AES-256-CBC', 'Security'],
      icon: CodeBracketIcon,
      link: 'https://github.com/MMGehrke/File-Encryption'
    }
  ];

  return (
    <section id="projects" className="section relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Projects</h2>
          <p className="text-gray-400">A showcase of my recent work and contributions</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-dark/80 backdrop-blur-sm rounded-lg p-6 hover:bg-dark/90 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm text-gray-400 bg-dark/90 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                >
                  View Project
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects; 