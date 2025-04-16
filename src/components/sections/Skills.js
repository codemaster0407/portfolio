import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionTitle from '../common/SectionTitle';
import SkillCard from '../ui/SkillCard';

const Skills = () => {
  const { darkMode } = useTheme();
  
  // Updated skills data from resume
  const skillsCategories = [
    {
      category: "Languages & Libraries",
      skills: ["Python", "C++", "SQL", "Pandas", "NumPy", "Scikit-learn", "HuggingFace", "PyTorch", "TensorFlow"]
    },
    {
      category: "GenAI & Infrastructure",
      skills: ["MCP Protocol", "Pydantic AI", "VLLM", "MLFlow", "Nvidia-SLRUM", "Ray"]
    },
    {
      category: "Miscellaneous",
      skills: ["AWS", "Docker", "Async programming", "Web Sockets", "Linux", "FastAPI", "Computer networks", "GitHub Actions", "Javascript"]
    },
    {
      category: "Interpersonal & Soft Skills",
      skills: ["Time Management", "Teamwork", "Problem-solving"]
    }
  ];

  return (
    <section className="mb-12">
      <SectionTitle title="Skills" />
      
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md transition-colors duration-300 relative z-10`}>
        {skillsCategories.map((category, idx) => (
          <div key={idx} className="mb-8">
            <h3 className={`text-lg font-bold mb-4 pb-2 border-b ${darkMode ? 'text-white border-blue-800' : 'text-gray-900 border-blue-200'}`}>
              {category.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {category.skills.map((skill, index) => (
                <SkillCard key={index} skill={{ name: skill }} darkMode={darkMode} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;