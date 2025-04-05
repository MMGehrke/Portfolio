import { motion } from 'framer-motion';
import { AcademicCapIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Cybersecurity',
      school: 'University of London',
      year: '2023 - Present',
      description: 'Specializing in Network Security and Ethical Hacking. Current GPA: 3.9/4.0',
      courses: [
        'Advanced Network Security',
        'Cryptography and Data Protection',
        'Ethical Hacking and Penetration Testing',
        'Security Architecture and Design',
        'Digital Forensics',
      ],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'State University',
      year: '2018 - 2022',
      description: 'Minor in Information Security. GPA: 3.8/4.0',
      courses: [
        'Computer Networks',
        'Operating Systems Security',
        'Database Security',
        'Software Engineering',
        'Information Assurance',
      ],
    },
  ];

  const certifications = [
    {
      name: 'Certified Ethical Hacker (CEH)',
      issuer: 'EC-Council',
      year: '2023',
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      year: '2022',
    },
    {
      name: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      year: '2021',
    },
  ];

  return (
    <section id="education" className="section bg-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-title text-white"
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <AcademicCapIcon className="h-6 w-6 mr-2 text-primary" />
              Education
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card bg-dark"
                >
                  <h4 className="text-xl font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-gray-300 text-sm mb-4">{edu.year}</p>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  <div>
                    <h5 className="font-medium text-white mb-2">Key Courses:</h5>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {edu.courses.map((course, i) => (
                        <li key={i}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BookOpenIcon className="h-6 w-6 mr-2 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="card bg-dark"
                >
                  <h4 className="text-xl font-semibold text-white">
                    {cert.name}
                  </h4>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  <p className="text-gray-300 text-sm">{cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education; 