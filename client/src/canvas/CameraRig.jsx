import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const CameraRig = ({ children, basePosition = [0, 0, 2], introPosition = [0, 0, 2.5], transitionSpeed = 0.25, rotationSensitivity = [6, 3] }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  const [isInteracting, setIsInteracting] = useState(false); // État pour suivre l'interaction manuelle

  useFrame((state, delta) => {
    if (!isInteracting) {
      const isBreakpoint = window.innerWidth <= 1260;
      const isMobile = window.innerWidth <= 600;

      let targetPosition = [-0.4, 0, 2];
      if (snap.intro) {
        if (isBreakpoint) targetPosition = basePosition;
        if (isMobile) targetPosition = [0, 0.2, 2.5];
      } else {
        targetPosition = isMobile ? introPosition : basePosition;
      }

      // Animation de la caméra
      easing.damp3(state.camera.position, targetPosition, transitionSpeed, delta);

      // Animation de la rotation du modèle en fonction de la position du pointeur
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / rotationSensitivity[0], -state.pointer.x / rotationSensitivity[1], 0],
        0.125,
        delta
      );
    }
  });

  return (
    <>
      <OrbitControls 
        enableZoom={true} 
        enableRotate={true} 
        enablePan={true}
        onStart={() => setIsInteracting(true)}  // Désactiver l'animation pendant l'interaction (rotation, zoom, etc.)
        onEnd={() => setTimeout(() => setIsInteracting(false), 2000)} // Réactiver après un délai
      />
      <group ref={group}>{children}</group>
    </>
  );
};

export default CameraRig;
