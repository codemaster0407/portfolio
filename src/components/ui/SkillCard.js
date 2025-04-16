import React from 'react';

const SkillCard = ({ skill, darkMode }) => {
  return (
    <div className={`rounded-lg p-3 transition-all duration-300 transform hover:scale-105 ${
      darkMode ? 'bg-blue-900/30 hover:bg-blue-800/50' : 'bg-blue-50 hover:bg-blue-100'
    }`}>
      <span className={`font-medium block ${darkMode ? 'text-white' : 'text-gray-800'}`}>{skill.name}</span>
    </div>
  );
};

export default SkillCard;