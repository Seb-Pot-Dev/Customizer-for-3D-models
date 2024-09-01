import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { useSpring, a } from '@react-spring/three'; // Importation pour l'animation 3D
import state from '../store';

import Shirt from './Shirt';
import Screw from './Screw';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = ({ activeModel }) => {
  const snap = useSnapshot(state);

  // Configuration de l'animation
  const { scale } = useSpring({
    scale: snap.isVisible ? 1 : 0, // 1 pour visible, 0 pour caché
    config: { tension: 280, friction: 60 }, // Ajustement de la réactivité
  });

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.6} />
      <Environment preset='city' />

      <CameraRig>
        <Backdrop />
        <Center>
          {snap.isVisible && (
            <a.group scale={scale}> 
              {activeModel === 'shirt' ? <Shirt /> : <Screw />}
            </a.group>
          )}
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
