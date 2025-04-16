import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';
import TimelineItem from '../ui/TimelineItem';

const Experience = () => {
  const { darkMode } = useTheme();
  
  const experienceData = [
    {
      id: 1,
      role: 'Associate Data Scientist',
      company: 'Awone AI',
      period: 'Jun 2024 - Present',
      description: 'Working as a full-time Associate Data Scientist at Awone AI in Hyderabad, India.',
      skills: ['LLMs', 'VLMs', 'Agentic workflows', 'Machine Learning', 'MLOPs'],
      details: [
        'Developed an end-to-end interruptible voice chat application with open-source components with MCP client-server for a user database.',
        'Improved the inference speed of production LLMs by 15% by quantization and developing speculative decoding n-gram head.',
        'Enhanced customer chatbot solutions through custom LLM routing, dynamic memory updates, and advanced reranking models, decreasing the token cost by 30%.'
      ]
    },
    {
      id: 2,
      role: 'Data Science Intern',
      company: 'Awone AI',
      period: 'Jan 2024 - Jun 2024',
      description: 'Completed a 6-month internship in Data Science at Awone AI in Hyderabad, India.',
      skills: ['LLMs', 'Transformers', 'Inference Optimization', 'GenAI'],
      details: [
        'Developed a strong foundation in LLMs and transformers by coding state-of-the-art models like Llama-2 and Mistral from scratch, focusing on architectures, attention mechanisms, and optimizations.',
        'Experimented with several LLM optimization and quantization techniques, helping to reduce latency on development platform.',
        'Finetuned task-specific SLMs for medical-insurance related tasks.'
      ]
    },
    {
      id: 3,
      role: 'Research Intern',
      company: 'Mahindra University',
      period: 'Jul 2023 - Sept 2023',
      description: 'Research internship focused on video summarization techniques at Mahindra University.',
      skills: ['Research', 'Video Summarization', 'Data Analysis'],
      details: [
        'Collaborated with a four-person team to conduct a thorough research survey on video summarization techniques.',
        'Co-authored a survey paper published in the ACMMM Workshop 2023.'
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
                  <p className={`${darkMode ? 'text-sky-400' : 'text-sky-600'} font-medium`}>{experience.company}</p>
                  
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