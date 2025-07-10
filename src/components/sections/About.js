import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';
import { SOCIAL_LINKS } from '../../constants/links';

const About = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className="mb-12" id="about-section">
      <SectionTitle title="About Me" />
      
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} rounded-lg shadow-md p-8`}>
        <div className="grid md:grid-cols-7 gap-8">
          {/* Left column - Quick Info and more */}
          <div className="md:col-span-2">
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 pb-1 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>Quick Info</h3>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-center">
                <div className={`rounded-full ${darkMode ? 'bg-blue-900' : 'bg-sky-100'} p-2 mr-3 flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${darkMode ? 'text-blue-300' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Masters in Business Analytics Student, WBS</span>
              </div>
              
              <div className="flex items-center">
                <div className={`rounded-full ${darkMode ? 'bg-blue-900' : 'bg-sky-100'} p-2 mr-3 flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${darkMode ? 'text-blue-300' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Hyderabad, Telangana, India</span>
              </div>
              
              <div className="flex items-center">
                <div className={`rounded-full ${darkMode ? 'bg-blue-900' : 'bg-sky-100'} p-2 mr-3 flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${darkMode ? 'text-blue-300' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <a href="mailto:schaitanya0407@gmail.com" className={`${darkMode ? 'text-gray-300 hover:text-blue-300' : 'text-gray-700 hover:text-sky-600'} transition-colors`}>
                  schaitanya0407@gmail.com
                </a>
              </div>
              
              <div className="flex items-center">
                <div className={`rounded-full ${darkMode ? 'bg-blue-900' : 'bg-sky-100'} p-2 mr-3 flex-shrink-0`}>
                  <svg className={`w-5 h-5 ${darkMode ? 'text-blue-300' : 'text-sky-600'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                  </svg>
                </div>
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Btech in AI Graduate</span>
              </div>
            </div>
            
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 pb-1 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>Languages</h3>
            <div className="space-y-3 mb-10">
              <div className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>English</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'} italic>Professional</span>
              </div>
              <div className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Hindi</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'} italic>Native</span>
              </div>
              <div className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Telugu</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'} italic>Native</span>
              </div>
              <div className="flex justify-between">
                <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Tamil</span>
                <span className={darkMode ? 'text-gray-400' : 'text-gray-500'} italic>Native</span>
              </div>
            </div>
            
            <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6 pb-1 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>Connect</h3>
            <div className="flex space-x-5">
              {/* LinkedIn */}
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${darkMode ? 'text-gray-300 hover:text-blue-300' : 'text-gray-600 hover:text-sky-600'} transition-colors`}
                aria-label="LinkedIn"
              >
                <img 
                  src={process.env.PUBLIC_URL + "/icons/linkedin.svg"}
                  alt="LinkedIn" 
                  className={`w-6 h-6 ${darkMode ? 'filter invert brightness-75' : ''}`} 
                />
              </a>
              
              {/* GitHub */}
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`${darkMode ? 'text-gray-300 hover:text-blue-300' : 'text-gray-600 hover:text-sky-600'} transition-colors`}
                aria-label="GitHub"
              >
                <img 
                  src={process.env.PUBLIC_URL + "/icons/github.svg"}
                  alt="GitHub" 
                  className={`w-6 h-6 ${darkMode ? 'filter invert brightness-75' : ''}`} 
                />
              </a>
              
           
             
              
              
            </div>
          </div>
          
          {/* Right column - Main content */}
          <div className="md:col-span-5">
            {/* Header section */}
            <div className="mb-6">
              <div className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-1`}>Ex-Associate AI Engineer</div>
              <div className="flex justify-between mb-4">
                <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Techolution, Hyderabad</div>
              </div>
            </div>
            
            {/* About Me Section */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Hey, I'm Chaitanya!</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                Hi there! I’m an AI Engineer with a passion for building impactful and innovative AI solutions. With a solid background in Computer Vision, I’ve developed multiple applications and successfully delivered client-facing projects. Beyond my enthusiasm for AI, I also enjoy crafting robust backend systems in Python and building scalable applications using Docker and Kubernetes.
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                I'm always eager to collaborate on projects that push the boundaries of what's possible with technology while making a positive impact on people's lives. Let's connect and create something amazing together! You have an idea, I build it!
              </p>
            </div>
            
            {/* Current Projects & Interests */}
            <div className="mb-8">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>Current Focus</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                I'm currently preparing for my next journey in my career as a  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}> Masters in Business Analytics Student</span> at Warwick Business School, UK. I'll be starting my studies in September 2025, where I aim to bridge the gap between AI technology and business strategy. This program will equip me with the skills to leverage data analytics for strategic decision-making, enhancing my ability to create AI solutions that drive business value.
              </p>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                At Techolution, I have developed advanced solutions for <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Inventory Management using Computer Vision</span> . Currently, I'm interested in exploring the intersection of AI and business, particularly in how AI can optimize operations and enhance customer experiences. I am also keen on learning more about <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Generative AI</span> and its applications in various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;