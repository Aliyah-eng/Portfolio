// src/components/Projects.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, BarChart } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      type: 'web',
      github: '#',
      live: '#',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Fitness Mobile App',
      description: 'Cross-platform fitness app with workout tracking, progress analytics, and social features.',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      type: 'mobile',
      github: '#',
      live: '#',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Dashboard for real-time data visualization and business intelligence with interactive charts.',
      tech: ['Next.js', 'TypeScript', 'D3.js', 'WebSocket'],
      type: 'web',
      github: '#',
      live: '#',
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: 'Food Delivery App',
      description: 'Mobile app for food ordering with real-time tracking, payment, and restaurant management.',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      type: 'mobile',
      github: '#',
      live: '#',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      title: 'Project Management Tool',
      description: 'Collaborative tool for teams with task management, file sharing, and real-time updates.',
      tech: ['React', 'Express', 'PostgreSQL', 'Redis'],
      type: 'web',
      github: '#',
      live: '#',
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: 'Meditation & Wellness App',
      description: 'Mobile app for meditation tracking, guided sessions, and wellness progress monitoring.',
      tech: ['React Native', 'GraphQL', 'AWS', 'Push Notifications'],
      type: 'mobile',
      github: '#',
      live: '#',
      icon: <Smartphone className="h-6 w-6" />
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.type === activeFilter
  );

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work across web and mobile development
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <div className="text-green-600 dark:text-green-400">
                      {project.icon}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                               hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                               hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 
                               text-gray-700 dark:text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={project.live}
                    className="flex-1 btn-primary text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex-1 btn-secondary text-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;