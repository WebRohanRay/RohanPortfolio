import React, { useRef } from 'react';
import { Canvas,useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';


const Model1 = () => {
  const { scene } = useGLTF('./computer.glb');
  
  
  return (
    <div style={{ height: '500px', width: '100%' }}>
      <Canvas
        style={{ height: '100%', width: '100%' }}
        camera={{
          position: [0, , 10],
          fov: 45
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight
          intensity={3}
          position={[5, 5, 5]}
          castShadow
        />
        <directionalLight
          intensity={3}
          position={[-5, 5, 5]}
          castShadow
        />
        <pointLight
          intensity={2}
          position={[2, 1, 0]}
          distance={6}
          decay={1}
          castShadow
        />
        <pointLight
          intensity={2}
          position={[-2, -1, 0]}
          distance={6}
          decay={1}
          castShadow
        />
        <spotLight
          intensity={4}
          position={[0, 3, -10]}
          angle={0.3}
          penumbra={1}
          distance={10}
          decay={1}
          castShadow
        />
        <hemisphereLight
          intensity={2}
          skyColor={'#a0c0f0'}
          groundColor={'#404040'}
        />
        <primitive object={scene} position={[0, -3.25, -1.5]} 
        scale={0.09} 
        />
        <OrbitControls 
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
        
        />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default Model1;
