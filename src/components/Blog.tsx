import React from 'react';
import { motion } from 'framer-motion';
import ParticleBackground from './ParticleBackground';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  readTime: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: "My Journey",
    description: "My two and half year journey in a nutshell.",
    readTime: "3 min read",
    date: "April 14, 2025"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="section relative">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Blog</h2>
          <p className="text-gray-400">Insights and updates from my cybersecurity journey</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-dark/80 backdrop-blur-sm rounded-lg p-6 hover:bg-dark/90 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                <span className="text-sm text-gray-400 bg-primary/20 px-2 py-1 rounded">
                  {post.readTime}
                </span>
              </div>
              <p className="text-gray-400 mb-4">{post.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{post.date}</span>
                <a 
                  href="https://www.linkedin.com/in/macoy-gehrke/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  Read on LinkedIn →
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog; 