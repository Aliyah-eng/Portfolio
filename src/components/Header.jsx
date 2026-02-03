// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 group-hover:rotate-12 transition-transform">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-space-grotesk">DevPortfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 
                         font-medium transition-colors relative after:content-[''] after:absolute 
                         after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-green-600 
                         after:transition-all hover:after:w-full"
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="btn-primary px-4 py-2"
            >
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 
                     hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 
                           hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('#contact')}
                className="btn-primary mt-2"
              >
                Get in Touch
              </button>
                            <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-3 py-2 rounded-md bg-green-600 text-white"
                >
                {darkMode ? 'Light' : 'Dark'}
                </button>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;