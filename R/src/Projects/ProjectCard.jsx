import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-wrap text-white py-6 px-10 sm:px-40 gap-4 
        bg-white bg-opacity-10 backdrop-blur-lg rounded-xl border border-gray-700
        hover:shadow-[0_4px_30px_rgba(99,102,241,0.4)] hover:border-blue-400 
        transition-all duration-300">

      {/* Project Details */}
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-white">{project.title}</h2>
        <p className="text-gray-300"><span className="font-bold text-white">Description:</span> {project.description}</p>
        <p className="text-gray-300"><span className="font-bold text-white">TechStack Used:</span> <br />{project.techStack.join(", ")}</p>
      </div>

      {/* Image & Button */}
      <div className="flex-shrink-0 text-center">
        <div className="w-32 h-32 bg-gray-900 border border-gray-600 rounded-lg flex items-center justify-center text-gray-500">
          📷 Image
        </div>

        {/* Animated Button */}
        <a href={project.demoLink} target="_blank" rel="noreferrer">
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 
              hover:scale-105 hover:shadow-lg hover:bg-blue-600">
            Demo Link
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
