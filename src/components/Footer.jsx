// src/components/Footer.jsx
import React from 'react';
import { Heart, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">DevPortfolio</span>
            </div>
            <p className="text-sm">
              Full-Stack & Mobile App Developer creating modern digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-white font-bold mb-4">Technologies</h4>
            <ul className="space-y-2 text-sm">
              <li>React & React Native</li>
              <li>Node.js & Express</li>
              <li>TypeScript & JavaScript</li>
              <li>MongoDB & SQL</li>
              <li>AWS & Docker</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>hello@devportfolio.com</li>
              <li>+1 (555) 123-4567</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-sm">
                © {currentYear} DevPortfolio. All rights reserved.
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm flex items-center">
                Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> and <Code2 className="h-4 w-4 text-green-500 ml-1" />
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;