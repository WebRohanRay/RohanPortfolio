import React from 'react';

const ProjectCard = ({ project }) => {
  return (

    <div className='flex flex-wrap text-white py-6 px-10 sm:px-40 gap-4 bg-white bg-opacity-10 rounded-lg'>
      <div className='flex-grow'>
        <h2 className='text-white text-xl'>{project.title}</h2>
        <p><span className="font-bold">Description:</span> {project.description}</p>
        <p><span className="font-bold">TechStack Used: </span><br />{project.techStack.join(', ')}</p>
      </div>
      <div className="flex-shrink-0 text-center">
        <div className="w-32 h-32 bg-white rounded-lg"></div> 
        <button className="mt-2 bg-secondary text-white px-4 py-2 rounded-lg">
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-blue-500">
            Demo Link
          </a>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
