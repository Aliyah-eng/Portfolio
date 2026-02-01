// src/components/About.jsx
import React from 'react';
import { User, Target, Code2, Smartphone } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              I'm a passionate developer with over 5 years of experience building 
              modern web and mobile applications. I specialize in creating clean, 
              efficient, and scalable solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Mission</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To build technology that solves real problems and enhances user experiences.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <User className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Approach</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    User-centered design, clean architecture, and best practices in every project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover">
              <div className="p-3 rounded-lg bg-green-500/10 inline-flex mb-4">
                <Code2 className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-bold text-xl mb-2">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Modern frameworks and libraries for responsive web applications
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover">
              <div className="p-3 rounded-lg bg-green-500/10 inline-flex mb-4">
                <Smartphone className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-bold text-xl mb-2">Mobile Apps</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Cross-platform mobile development for iOS and Android
              </p>
            </div>
            
            <div className="col-span-2 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-xl mb-2">Technologies</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    React, Node.js, React Native, MongoDB, Express, TypeScript
                  </p>
                </div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                  50+
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Projects completed successfully
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;