import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Screw = () => {
  const gltf = useLoader(GLTFLoader, '/press_in_anchor.gltf');

  if (!gltf) return null;

  return (
    <group>
      <primitive object={gltf.scene} scale={0.01} />
    </group>
  );
};

export default Screw;
