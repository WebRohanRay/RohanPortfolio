import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Model from './Model';

const ModelContainer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }} // Smoother transition
      viewport={{ once: false, amount: 0.3 }}
      className="flex justify-center items-center w-full"
      style={{ height: '400px' }}
    >
      <Canvas
        shadows
        frameloop="always" // Ensures smooth rendering
        camera={{ position: [1, 5, 10], fov: 45 }}
      >
        <Model />
      </Canvas>
    </motion.div>
  );
};

export default ModelContainer;
