import React from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

const ModelContainer = () => {
  return (
    <div 
    className=''
      style={{ 
        height: '500px', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        
       
      }}
    >
      <Canvas
        style={{ 
          
        }}
        camera={{
          position: [1, 5, 10],
          fov: 45,
        }}
      >
        <Model />
      </Canvas>
    </div>
  );
};

export default ModelContainer;
