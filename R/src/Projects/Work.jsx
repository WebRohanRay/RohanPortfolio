import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Work = () => {
  const projects = [
    {
      title: "Project One",
      description: "Description for Project One",
      techStack: ["React", "Node.js", "MongoDB"],
      image: "https://example.com/project1.jpg",
      demoLink: "https://example.com/demo1",
    },
    {
        title: "Project One",
        description: "Description for Project One",
        techStack: ["React", "Node.js", "MongoDB"],
        image: "https://example.com/project1.jpg",
        demoLink: "https://example.com/demo1",
      },
    {
      title: "Project Two",
      description: "Description for Project Two",
      techStack: ["Vue", "Express", "MySQL"],
      image: "https://example.com/project2.jpg",
      demoLink: "https://example.com/demo2",
    },
  ];

  return (
    <div className='py-6 px-10 sm:px-40'><h1 className='text-center glow-effect text-6xl text-white'>Work</h1>

      <div className='flex flex-col gap-4 mt-4'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 25,
              delay: index * 0.2,
            }}
          >
            <ProjectCard key={index} project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Work;
