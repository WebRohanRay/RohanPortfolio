import React from "react";
import { Tilt } from "react-tilt";

const OverviewSkillCard = ({ name, level }) => {
  const defaultOptions = {
    reverse: false,
    max: 15, // Smooth tilt
    perspective: 1200,
    scale: 1.05, // Slight zoom effect
    speed: 1500,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(0.25, 0.8, 0.25, 1)",
  };

  return (
    <Tilt options={defaultOptions}>
      <div className="relative overflow-hidden rounded-xl w-[250px] h-[300px] flex justify-center items-center shadow-lg transition-all duration-300 
        bg-gradient-to-br from-[#121212] to-[#1a1a1a] border border-gray-700 
        hover:shadow-[0_4px_30px_rgba(99,102,241,0.4)] hover:border-blue-400 
        hover:scale-105 hover:backdrop-blur-md">
        
        {/* Inner Content */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-white">{name}</h2>
          <p className="text-gray-400">Level: {level}</p>
        </div>

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 transition-all duration-500 bg-blue-500 blur-2xl rounded-xl hover:opacity-20"></div>
      </div>
    </Tilt>
  );
};

export default OverviewSkillCard;
