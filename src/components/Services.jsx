// src/components/Services.jsx
import React from 'react';
import { Code2, Smartphone, Cpu, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description: 'Building responsive, modern web applications using React, Next.js, and modern frameworks.',
      icon: <Code2 className="h-8 w-8" />,
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Performance Optimization']
    },
    {
      title: 'Mobile App Development',
      description: 'Creating cross-platform mobile applications for iOS and Android using React Native.',
      icon: <Smartphone className="h-8 w-8" />,
      features: ['iOS & Android Apps', 'React Native', 'Expo', 'App Store Deployment']
    },
    {
      title: 'API Integration',
      description: 'Designing and implementing RESTful and GraphQL APIs for seamless data exchange.',
      icon: <Cpu className="h-8 w-8" />,
      features: ['REST APIs', 'GraphQL', 'Authentication', 'Third-party Integration']
    },
    {
      title: 'UI/UX Design',
      description: 'Creating intuitive user interfaces and experiences that engage and convert users.',
      icon: <Palette className="h-8 w-8" />,
      features: ['Wireframing', 'Prototyping', 'User Testing', 'Design Systems']
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <p className="section-subtitle">
            Comprehensive solutions for web and mobile development needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg card-hover border border-gray-200 dark:border-gray-700"
            >
              <div className="p-3 rounded-lg bg-green-500/10 inline-flex mb-6">
                <div className="text-green-600 dark:text-green-400">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="font-bold text-xl mb-4">{service.title}</h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;