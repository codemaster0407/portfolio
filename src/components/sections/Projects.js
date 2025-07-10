import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import ProjectCard from '../ui/ProjectCard';
import SectionTitle from '../common/SectionTitle';
import { PROJECT_LINKS } from '../../constants/links';

const Projects = () => {
  const { darkMode } = useTheme();
  const [projectFilter, setProjectFilter] = useState('all');
  
  // Updated projects data with links from constants
  const projectsData = [
    {
      id: 1,
      title: "Smart Rack Inventory System | Techolution ",
      description: "Smart Rack Inventory System which can automatically detect medical items from the rack based on human interaction with the product and update the client inventory accordingly using Computer Vision Models.",
      category: "ai",
      technologies: ["Pytorch", "Google Cloud Service", "Google OCR", "Docker", "FastAPI", "Paddle OCR", "VLLMs", "LLMs"],
      period: "Mar 2025 - Jul 2025",
      projectLink: PROJECT_LINKS.chestXrayQA
    },
    {
      id: 2,
      title: "AI Powered Scanning Station | Techolution",
      description: "Development of an AI-powered rapid scanning station for medical products, currently implemented in hospital operating rooms, enhancing the efficiency of hospital inventory management systems. Implemented user experience modules for AI assisted feedback for the application to interact with the user",
      category: "ai",
      technologies: ["Pytorch", "Google Cloud Service", "Google OCR", "Docker", "FastAPI", "Paddle OCR", "VLLMs", "LLMs", "Google Cloud Build", "Google Vertex AI"],
      period: "Aug 2024 - Apr 2025",
      projectLink: PROJECT_LINKS.scratchLLM
    },
    {
      id: 3,
      title: "AI-Assisted Learning for NVIDIA SDKs and Toolkits",
      description: "Developed a fine-tuned LLM that assists users in understanding and effectively using various NVIDIA SDKs. Secured 3rd place in ICETCI Hackathon.",
      category: "llm",
      technologies: ["HuggingFace", "PyTorch", "Nvidia-SLURM"],
      period: "Aug 2023 - Sept 2023",
      projectLink: PROJECT_LINKS.nvidiaSDK
    },
    {
      id: 4,
      title: "Product Onboarding | Techolution",
      description: "Creation of Product Onboarding Platform where Computer Vision models can learn about a new product instantaneously for real time computer vision based applications.",
      category: "ai",
      technologies: ["PyTorch", "Segment Anything Model", "HuggingFace", "FastAPI", "Tensorflow"],
      period: "Nov 2023 - Jul 2024",
      projectLink: PROJECT_LINKS.videoSummarization
    },
    {
      id: 5,
      title: "3D Human Body Measurements | Mahindra University ",
      description: "During my undergraduation, I led the development of an advanced algorithm that can detect and measure different human body parts, such as girths and circumferences.",
      category: "ml",
      technologies: ["Blender", "Python", "Numpy"],
      period: "Apr 2023 - Mar 2024",
      projectLink: PROJECT_LINKS.layoffsAnalysis
    }
  ];
  
  // Filtered projects based on category
  const filteredProjects = projectFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === projectFilter);
  
  return (
    <section className="mb-12">
      <SectionTitle title="Projects" />
      
      {/* Project filters */}
      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <div className={`inline-flex p-1 rounded-lg ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}>
          <button 
            onClick={() => setProjectFilter('all')} 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              projectFilter === 'all' 
                ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white') 
                : (darkMode ? 'text-gray-300 hover:bg-blue-800' : 'text-gray-800 hover:bg-blue-200')
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setProjectFilter('ai')} 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              projectFilter === 'ai' 
                ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white') 
                : (darkMode ? 'text-gray-300 hover:bg-blue-800' : 'text-gray-800 hover:bg-blue-200')
            }`}
          >
            AI
          </button>
          <button 
            onClick={() => setProjectFilter('ml')} 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              projectFilter === 'ml' 
                ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white') 
                : (darkMode ? 'text-gray-300 hover:bg-blue-800' : 'text-gray-800 hover:bg-blue-200')
            }`}
          >
            Machine Learning
          </button>
          <button 
            onClick={() => setProjectFilter('llm')} 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              projectFilter === 'llm' 
                ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white') 
                : (darkMode ? 'text-gray-300 hover:bg-blue-800' : 'text-gray-800 hover:bg-blue-200')
            }`}
          >
            LLMs
          </button>
         
        </div>
      </div>
      
      {/* Projects grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={{
              ...project,
              // Adding these props for the ProjectCard component
              description: project.description,
              technologies: project.technologies,
              period: project.period,
              projectLink: project.projectLink
            }}
            index={project.id - 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;