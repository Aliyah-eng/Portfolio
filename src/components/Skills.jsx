// src/components/Skills.jsx
import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  Database, 
  Smartphone, 
  GitBranch, 
  Figma,
  Server
} from 'lucide-react';

const Skills = () => {
  const [animatedPercentages, setAnimatedPercentages] = useState({});

  useEffect(() => {
    const skills = {
      react: 95,
      typescript: 90,
      nodejs: 92,
      reactNative: 88,
      mongodb: 85,
      git: 90
    };

    const timer = setTimeout(() => {
      setAnimatedPercentages(skills);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code2 className="h-6 w-6" />,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
      skills: [
        { name: 'React', percentage: 95 },
        { name: 'HTML/CSS', percentage: 98 },
        { name: 'JavaScript', percentage: 96 },
        { name: 'TypeScript', percentage: 90 }
      ]
    },
    {
      title: 'Backend',
      icon: <Server className="h-6 w-6" />,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      skills: [
        { name: 'Node.js', percentage: 92 },
        { name: 'Express', percentage: 90 },
        { name: 'REST APIs', percentage: 94 },
        { name: 'GraphQL', percentage: 85 }
      ]
    },
    {
      title: 'Database',
      icon: <Database className="h-6 w-6" />,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      skills: [
        { name: 'MongoDB', percentage: 85 },
        { name: 'SQL', percentage: 80 },
        { name: 'PostgreSQL', percentage: 75 },
        { name: 'Redis', percentage: 70 }
      ]
    },
    {
      title: 'Mobile',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      skills: [
        { name: 'React Native', percentage: 88 },
        { name: 'iOS/Android', percentage: 82 },
        { name: 'Expo', percentage: 85 },
        { name: 'Mobile UI', percentage: 80 }
      ]
    },
    {
      title: 'Tools',
      icon: <GitBranch className="h-6 w-6" />,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      skills: [
        { name: 'Git/GitHub', percentage: 90 },
        { name: 'Docker', percentage: 75 },
        { name: 'AWS', percentage: 70 },
        { name: 'Figma', percentage: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Expertise across modern web and mobile development technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover border border-gray-200 dark:border-gray-700"
            >
              <div className={`p-3 rounded-lg ${category.bgColor} inline-flex mb-4`}>
                <div className={category.color}>
                  {category.icon}
                </div>
              </div>
              
              <h3 className="font-bold text-lg mb-6">{category.title}</h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="font-bold text-green-600 dark:text-green-400">
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all duration-1000"
style={{ 
  width: `${animatedPercentages[skill.name.toLowerCase().replace(/[^a-z]/g, '')] || 0}%` 
}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;