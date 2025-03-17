import React, { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Box3, Vector3 } from 'three';

const Model = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('./computer.glb');
  const { size } = useThree(); 

  useEffect(() => {
    if (modelRef.current) {
      // Center the model
      const box = new Box3().setFromObject(modelRef.current);
      const center = new Vector3();
      box.getCenter(center);
      modelRef.current.position.sub(center);

      // Adjust size based on screen width
      let scaleFactor;
      if (size.width > 1024) {
        scaleFactor = 0.18; // Large screens (Desktops)
      } else if (size.width > 768) {
        scaleFactor = 0.1; // Medium screens (Tablets)
      } else {
        scaleFactor = 0.08; // Small screens (Phones)
      }
      modelRef.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  }, [scene, size.width]); 

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={2} />
      <directionalLight intensity={3} position={[5, 5, 5]} castShadow />
      <directionalLight intensity={3} position={[-5, 5, 5]} castShadow />
      <pointLight intensity={2} position={[2, 1, 0]} distance={6} decay={1} castShadow />
      <pointLight intensity={2} position={[-2, -1, 0]} distance={6} decay={1} castShadow />
      <spotLight intensity={4} position={[0, 3, -10]} angle={0.3} penumbra={1} distance={10} decay={1} castShadow />
      <hemisphereLight intensity={2} skyColor={'#a0c0f0'} groundColor={'#404040'} />

      {/* Model */}
      <primitive object={scene} ref={modelRef} />

      {/* Orbit Controls */}
      <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} />
      
      <Preload all />
    </>
  );
};

export default Model;
