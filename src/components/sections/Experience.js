import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';
import TimelineItem from '../ui/TimelineItem';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const { darkMode } = useTheme();
  
  const experienceData = [
    {
      id: 1,
      role: 'Associate AI Engineer',
      company: 'Techolution',
      companyUrl: 'https://www.techolution.com/',
      logo: `${process.env.PUBLIC_URL}/assets/logos/techo.svg`,
      period: 'June 2024 - July 2025',
      description: 'Worked as a full time AI Engineer specializing in Computer vision applications and Python backend.',
      skills: ['Computer Vision', 'Docker', 'Python', 'VLLMs', 'Backend Development'],
      details: [
        'Developed a medical product scanning station for faster inventory management for medical products.',
        'Developed pipelines for custom OCR models for handwritten text recognition ',
        'Bridging gaps between backend and AI models by developing Python backend services for model inference and data processing.',
      ]
    },
    {
      id: 2,
      role: 'AI Intern',
      company: 'Techolution',
      companyUrl: 'https://www.techolution.com/',
      logo: `${process.env.PUBLIC_URL}/assets/logos/techo.svg`,
      period: 'Nov 2023 - May 2024',
      description: 'Worked as an AI intern and researching on onboarding new classes for CV Models.',
      skills: ['Computer Vision', 'Machine Learning'],
      details: [
        'Worked on developing custom pipelines for onboarding new classes for computer vision models.',
      ]
    }
  ];
  
  return (
    <section className="mb-12">
      <SectionTitle title="Experience" />
      
      <div className="relative pb-12">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-px bg-sky-500 transform -translate-x-1/2"></div>
        
        {/* Timeline items */}
        <div className="space-y-20">
          {experienceData.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-sky-500' : 'bg-sky-600'} flex items-center justify-center border-4 ${darkMode ? 'border-gray-800' : 'border-white'}`}>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
              
              <div className="ml-8 md:ml-0 md:grid md:grid-cols-2 md:gap-8 items-start relative">
                {/* Left side - Date/Period */}
                <div className="md:text-right md:pr-12">
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    darkMode 
                      ? 'bg-sky-900 text-white' 
                      : 'bg-sky-100 text-sky-800'
                  }`}>
                    {experience.period}
                  </span>
                </div>
                
                {/* Right side - Content */}
                <div className={`mt-3 md:mt-0 ${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{experience.role}</h3>
                  <div className="flex flex-col gap-2 mb-2">
                    {experience.logo && (
                      <div className="flex items-center gap-2">
                        <img 
                          src={experience.logo} 
                          alt={`${experience.company} logo`} 
                          className="h-10 w-auto object-contain"
                        />
                        <div className="flex items-center gap-2">
                          <p className={`${darkMode ? 'text-sky-400' : 'text-sky-600'} font-medium`}>{experience.company}</p>
                          {experience.companyUrl && (
                            <a 
                              href={experience.companyUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`inline-flex items-center ${darkMode ? 'text-sky-400 hover:text-sky-300' : 'text-sky-600 hover:text-sky-700'} transition-colors`}
                              aria-label={`Visit ${experience.company} website`}
                            >
                              <FaExternalLinkAlt size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className={`inline-block px-3 py-1 text-sm rounded ${
                          darkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <ul className={`mt-4 space-y-2 list-disc pl-5 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {experience.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
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