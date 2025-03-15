import React from 'react';
import { motion } from 'framer-motion';  
import OverviewSkillCard from './OverviewSkillCard';

const Overview = () => {
  const skills = {
    technologies: [
      {
        name: "Frontend Developer",
        level: "Advanced",
      },
      {
        name: "Backend Developer",
        level: "Intermediate",
      },
      {
        name: "Java Developer",
        level: "Intermediate",
      },
    ],
  };

  return (
    <>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}  
        animate={{ opacity: 1, y: 0 }}   
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}
      >
        <div className="py-6 px-10 sm:px-40">
          <div>
            <h1 className="text-center text-6xl text-white">Overview</h1>
            <p className='text-white'>
              👋 Hi, I'm Rohan Ray – a B.Tech CSE student currently in my 3rd year. I have a strong passion for software development, AI, and web technologies, always looking to innovate and solve real-world challenges.
              <br />
              🚀 Currently, I’m working on projects related to web development, AI, and sustainability. My goal is to build impactful solutions while continuously learning and improving my craft.
            </p>
          </div>
          
        
          <div className="flex flex-wrap gap-4 justify-evenly mt-4">
            {skills.technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }} 
                whileInView={{ opacity: 1, x: 0 }}  
                viewport={{ once: false }}           
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 25,
                  delay: index * 0.2, 
                }}
              >
                <OverviewSkillCard level={tech.level} name={tech.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Overview;
