import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';

const About = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className="mb-12">
      <SectionTitle title="About Me" />
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="grid md:grid-cols-7 gap-8">
          {/* Left column - Quick Info and more */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-1 border-b border-gray-200">Quick Info</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className="rounded-full bg-sky-100 p-2 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Associate Data Scientist</span>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full bg-sky-100 p-2 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Hyderabad, Telangana, India</span>
              </div>
              
              <div className="flex items-center">
                <div className="rounded-full bg-sky-100 p-2 mr-3 flex-shrink-0">
                  <svg className="w-5 h-5 text-sky-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Gold Medalist in BTech AI</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-1 border-b border-gray-200">Languages</h3>
            <div className="space-y-3 mb-10">
              <div className="flex justify-between">
                <span className="text-gray-700">English</span>
                <span className="text-gray-500 italic">Professional</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Hindi</span>
                <span className="text-gray-500 italic">Native</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Telugu</span>
                <span className="text-gray-500 italic">Native</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-1 border-b border-gray-200">Connect</h3>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.23 0H1.77C.79 0 0 .79 0 1.77v20.46C0 23.21.79 24 1.77 24h20.46c.98 0 1.77-.79 1.77-1.77V1.77C24 .79 23.21 0 22.23 0zM7.27 20.45H3.65V8.99h3.62v11.46zM5.47 7.39c-1.16 0-2.1-.94-2.1-2.1 0-1.16.94-2.1 2.1-2.1 1.16 0 2.1.94 2.1 2.1 0 1.16-.94 2.1-2.1 2.1zm15 13.06h-3.62v-5.57c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99v5.67H9.17V8.99h3.47v1.59h.05c.48-.91 1.66-1.88 3.41-1.88 3.65 0 4.33 2.4 4.33 5.52v6.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.45 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.21.08 1.85 1.24 1.85 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.57 21.8 24 17.31 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-sky-600 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.053 10.053 0 01-3.127 1.184A4.92 4.92 0 0016.77 2.5a4.924 4.924 0 00-4.924 4.924c0 .39.044.765.127 1.124C7.691 8.115 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.9 4.9 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right column - Main content */}
          <div className="md:col-span-5">
            {/* Header section */}
            <div className="mb-6">
              <div className="text-xl font-bold text-gray-900 mb-1">Gold medalist in BTech Artificial Intelligence</div>
              <div className="flex justify-between mb-4">
                <div className="text-lg text-gray-700">Associate Data Scientist</div>
              </div>
              
              {/* </div> */}
            </div>
            
            {/* My Approach section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">My Approach</h3>
              <p className="text-gray-700">
                I approach AI challenges by combining <span className="font-bold">theoretical knowledge</span> with <span className="font-bold">practical implementation</span>. My work spans from developing end-to-end applications to fine-tuning specialized models for domain-specific tasks.
              </p>
            </div>
            
            {/* What I Bring section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What I Bring</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">▹</span>
                  <div><span className="font-bold text-gray-900">Expertise</span> <span className="text-gray-700">in advanced LLM optimization and fine-tuning techniques</span></div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">▹</span>
                  <div><span className="font-bold text-gray-900">Experience</span> <span className="text-gray-700">developing multi-modal AI systems for practical applications</span></div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">▹</span>
                  <div><span className="font-bold text-gray-900">Strong foundation</span> <span className="text-gray-700">in both research and production implementation</span></div>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-600 mr-2">▹</span>
                  <div><span className="font-bold text-gray-900">Ability</span> <span className="text-gray-700">to optimize model performance while reducing computational costs</span></div>
                </li>
              </ul>
            </div>
            
            {/* Final paragraph */}
            <p className="text-gray-700">
              Currently, I'm focused on <span className="font-bold text-gray-900">explainable AI techniques</span> and improving <span className="font-bold text-gray-900">multi-modal frameworks</span>, particularly in the conversation AI space. I enjoy taking on complex challenges that push the boundaries of what's possible with AI technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;