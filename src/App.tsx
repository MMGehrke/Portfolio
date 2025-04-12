import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0">
        <ParticleBackground />
      </div>
      <div className="relative z-10">
        <div className="absolute inset-0 bg-dark/50" />
        <div className="relative">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Education />
            <Projects />
            <Blog />
            <Contact />
            {/* Additional sections will be added here */}
          </main>
          <footer className="bg-dark py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-gray-400">
                © 2025 Macoy Gehrke. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
