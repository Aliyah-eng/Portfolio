// src/App.jsx
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to <html>
  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add('dark') : root.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
