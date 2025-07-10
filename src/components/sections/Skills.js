import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  const { darkMode } = useTheme();
  
  // Updated skills data with expertise levels
  // Expertise levels: 1-2 = Beginner, 3-4 = Intermediate, 5-6 = Expert
  const skillsCategories = [
    {
      category: "Languages & Libraries",
      skills: [
        { name: "Python", level: 6 },
        { name: "C++", level: 3 },
        { name: "SQL", level: 4 },
        { name: "Pandas", level: 5 },
        { name: "NumPy", level: 6 },
        { name: "Scikit-learn", level: 6 },
        { name: "HuggingFace", level: 3 },
        { name: "PyTorch", level: 6 },
        { name: "TensorFlow", level: 5 }
      ]
    },
    {
      category: "Machine & Deep Learning",
      skills: [
        { name: "Supervised Learning (Tradional ML)", level: 6 },
        { name: "Unsupervised Learning", level: 3 },
      ]
    },
    {
      category: "AI engineering & Infrastructure",
      skills: [
        { name: "VLLM", level: 3 },
        { name: "MLFlow", level: 4 },
      ]
    },
    {
      category: "Cloud & Deployment",
      skills: [
        { name: "Google Cloud", level: 4 },
        { name: "Kubernetes", level: 2 },
        { name: "Docker", level: 5 },
        { name: "Async programming", level: 6 },
        { name: "Web Sockets", level: 6 },
        { name: "Linux", level: 5 },
        { name: "FastAPI", level: 6 },
        { name: "GitHub Actions", level: 4 },
        { name: "MongoDB", level: 5 },
        { name: "MQTT Protocol", level: 5 },
        { name: "Firebase", level: 5 }
      ]
    }
  ];

  return (
    <section className="mb-12">
      <SectionTitle title="Skills" />
      {/* 👇 New image below section title */}
      <div className="w-720 h-auto">
        <img
          src= {process.env.PUBLIC_URL + "/images/gcp-certfied.jpg" } // Place this image in public/images/
          alt="Google Cloud Certified"
          // className="w-full max-w-md h-auto rounded-md shadow"
           className="w-full h-full object-cover rounded-lg shadow"
        />
      </div>
      
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300 relative z-10`}>
        {skillsCategories.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h3 className={`text-lg font-bold mb-4 pb-2 border-b ${darkMode ? 'text-white border-blue-800' : 'text-gray-900 border-blue-200'}`}>
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {category.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} darkMode={darkMode} />
              ))}
            </div>
          </div>
        ))}

        {/* Google Cloud Certification Badge Section */}
        <div className={`mt-10 p-4 border-l-4 ${darkMode ? 'border-yellow-400 bg-gray-700 text-white' : 'border-yellow-500 bg-yellow-50 text-gray-800'} rounded flex items-center gap-4`}>
      <img
       src= {process.env.PUBLIC_URL + "/images/gcp-badge.png" }  // Image should be placed in public/images/gcp-badge.png
        alt="Google Cloud Certified Badge"
        className="w-20 h-auto"
      />
      <div>
        <h3 className="text-lg font-semibold">
          Google Cloud Certified Professional Machine Learning Engineer
        </h3>
        <p className="text-sm">
          Certified ML Engineer skilled in building, deploying, and optimizing ML models using Google Cloud. Experienced in handling large datasets, writing reusable code, and applying responsible AI practices.
        </p>

        <a
        href="https://www.credly.com/badges/b9a3e1c2-30ea-4b33-8f3b-0755dbe17d5e/linked_in_profile"  // Replace with your actual certificate link
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-2 inline-block text-sm font-medium underline ${
          darkMode ? 'text-yellow-300 hover:text-yellow-200' : 'text-yellow-600 hover:text-yellow-500'
        }`}
      >
        View Certificate
      </a>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Skills;