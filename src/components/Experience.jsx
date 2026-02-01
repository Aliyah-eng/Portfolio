// src/components/Experience.jsx
import React from 'react';
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: '2021 - Present',
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'New York, NY',
      description: 'Leading development of enterprise web applications and mentoring junior developers.',
      achievements: [
        'Led migration to microservices architecture',
        'Improved application performance by 60%',
        'Mentored 8 junior developers'
      ]
    },
    {
      year: '2019 - 2021',
      title: 'Mobile App Developer',
      company: 'Innovate Mobile',
      location: 'San Francisco, CA',
      description: 'Developed and maintained cross-platform mobile applications for iOS and Android.',
      achievements: [
        'Built 5+ mobile applications',
        'Achieved 4.8+ app store ratings',
        'Reduced crash rate by 80%'
      ]
    },
    {
      year: '2017 - 2019',
      title: 'Web Developer',
      company: 'Digital Agency',
      location: 'Austin, TX',
      description: 'Created responsive websites and web applications for various clients.',
      achievements: [
        'Developed 20+ client websites',
        'Improved load times by 40%',
        'Maintained 100% client satisfaction'
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Professional journey and career milestones
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 z-10`}>
                <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-white"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                  {/* Year */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm font-medium mb-4">
                    <Calendar className="h-3 w-3 mr-2" />
                    {exp.year}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                  
                  <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {exp.company}
                    <span className="mx-2">•</span>
                    <MapPin className="h-4 w-4 mr-1" />
                    {exp.location}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center">
                      <Award className="h-4 w-4 mr-2 text-green-600 dark:text-green-400" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-3 mt-1.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;