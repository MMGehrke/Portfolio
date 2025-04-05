import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Contact />
        {/* Additional sections will be added here */}
      </main>
      <footer className="bg-white dark:bg-dark py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Cybersecurity Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
