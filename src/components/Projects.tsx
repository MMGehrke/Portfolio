import { motion } from 'framer-motion';
import { CodeBracketIcon, ShieldCheckIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Security Hardening Script',
      description: 'This project is an automated script designed to enhance the security of Mac, Linux, & Windows systems by applying various hardening configurations.',
      technologies: ['Python', 'shell', 'powershell'],
      icon: ShieldCheckIcon,
      link: 'https://github.com/MMGehrke/Automated-Security-Hardening/tree/main',
    },
    {
      title: 'Custom GRC Dashboard',
      description: 'A web-based compliance tool that allows healthcare professionals to select from pre-loaded standards to create automated audit checklists, with the ability to upload and reference custom regulations.',
      technologies: ['Python', 'React'],
      icon: MagnifyingGlassIcon,
      link: 'https://github.com/MMGehrke/HealthcareGRCDashboardBackend/tree/main',
    },
    {
      title: 'File Encryption/Decryption Tool',
      description: 'Secure File Handling by developing an application enabling users to encrypt and decrypt files, ensuring data confidentiality through the implementation of robust cryptographic algorithms (both symmetric and asymmetric).',
      technologies: ['Python', 'Python libraries: cryptography'],
      icon: CodeBracketIcon,
      link: 'https://github.com/MMGehrke/File-Encryption',
    },
  ];

  return (
    <section id="projects" className="section relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-white"
        >
          Projects & Research
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="card group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white ml-4">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-dark rounded-full text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={project.link}
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