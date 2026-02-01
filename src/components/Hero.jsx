// src/components/Hero.jsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Code2, Smartphone } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Full-Stack & Mobile App Developer';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index));
        setIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="pt-32 pb-20 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 
                            border border-green-200 dark:border-green-700">
                <span className="text-sm font-medium text-green-600 dark:text-green-400">
                  Hello, I'm
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Alex <span className="gradient-text">Developer</span>
              </h1>
              
              <div className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-12">
                {text}<span className="animate-pulse">|</span>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I create modern, scalable web and mobile applications with clean code and 
                exceptional user experiences. Passionate about solving complex problems 
                through technology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </button>
            </div>
            
            <div className="flex items-center space-x-4 pt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                          hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 
                          hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-400/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 
                          border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10 mr-3">
                      <Code2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="font-semibold">Full-Stack Development</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React, Node.js, Express, MongoDB
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10 mr-3">
                      <Smartphone className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <span className="font-semibold">Mobile Apps</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    React Native, iOS & Android
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-lg bg-green-500/10 mr-3">
                      <div className="h-6 w-6 text-green-600 dark:text-green-400 font-bold">API</div>
                    </div>
                    <span className="font-semibold">APIs</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    REST & GraphQL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;