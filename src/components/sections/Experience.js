import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';

import { FaExternalLinkAlt } from 'react-icons/fa';

const Experience = () => {
  const { darkMode } = useTheme();
  
  const experienceData = [
    {
      id: 5,
      role: 'ML Engineer (Still to be decided)',
      company: 'WM Trains Ltd.',
      companyUrl: 'https://www.westmidlandsrailway.co.uk/',
      logo: `${process.env.PUBLIC_URL}/icons/wm_logo.jpeg`,
      period: 'April 2026 - Present',
      description: 'Building a predictive maintenance system to enhance asset reliability and optimise costs.',
      skills: ['Machine Learning', 'Data Analytics', 'Predictive Maintenance'],
      details: [
        'Develop a predictive maintenance system to enhance asset reliability and optimise costs across West Midlands Trains’ railway infrastructure using data-driven analytics'
      ]
    }, 
    {
      id: 1,
      role: 'Intern',
      company: 'Gillmore Financial Technology Center',
      companyUrl: 'https://warwick.ac.uk/fac/soc/wbs/subjects/finance/gillmore/',
      logo: `${process.env.PUBLIC_URL}/assets/logos/wbs-logo.svg`,
      period: 'April 2026 - Present',
      description: 'Working as a research intern in building a Unified Embedding model for financial documents.',
      skills: ['Python', 'PyTorch', 'Embeddings', 'RAGs', 'LLMs'],
      details: [
        'Developing a Unified Embedding model for financial documents.',
        'Fine-tuning LLMs for financial tasks.',
        'Building RAG pipelines for financial documents.',
      ]
    },
    {
      id: 4,
      role: 'Mentor',
      company: 'Warwick Coding Society',
      companyUrl: 'https://www.linkedin.com/company/76108145/',
      logo: `${process.env.PUBLIC_URL}/images/warwick-coding-soc.jpeg`,
      period: 'October 2025 - December 2025',
      description: 'Mentoring students in building AI and ML projects in Python.',
      skills: ['Computer Vision', 'Python', 'FastAPI', 'Flask'],
      details: [
        'Mentoring students in building AI and ML projects in Python.'
      ]
    },
    {
      id: 2,
      role: 'Associate AI Engineer',
      company: 'Techolution',
      companyUrl: 'https://www.techolution.com/',
      logo: `${process.env.PUBLIC_URL}/assets/logos/techo.svg`,
      period: 'June 2024 - July 2025',
      description: 'Worked as a full time AI Engineer specializing in Computer vision applications and Python backend.',
      skills: ['Computer Vision', 'Docker', 'Python', 'VLLMs', 'Backend Development', 'Google Cloud'],
      details: [
        'Developed a medical product scanning station for faster inventory management for medical products.',
        'Developed pipelines for custom OCR models for handwritten text recognition ',
        'Bridging gaps between backend and AI models by developing Python backend services for model inference and data processing.',
      ]
    },
    {
      id: 3,
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