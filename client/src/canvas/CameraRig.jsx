import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'; // Permet d'exécuter du code à chaque frame (image) rendue par React Three Fiber
import { easing } from 'maath'; // Utilisé pour animer en douceur les mouvements et rotations
import { useSnapshot } from 'valtio'; // Pour accéder à l'état réactif géré par valtio

import state from '../store'; // Import du store valtio pour gérer l'état global

const CameraRig = ({ children }) => {
  const group = useRef(); // Référence au groupe 3D contenant le modèle
  const snap = useSnapshot(state); // Capture instantanée de l'état global pour réagir aux changements

  useFrame((state, delta) => {
    // Variables pour détecter si l'écran est en mode breakpoint (tablette) ou mobile
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    // Définition de la position initiale du modèle 3D
    let targetPosition = [-0.4, 0, 2]; // Position par défaut
    if (snap.intro) { // Si on est dans l'état d'intro
      if (isBreakpoint) targetPosition = [0, 0, 2]; // Position pour les tablettes
      if (isMobile) targetPosition = [0, 0.2, 2.5]; // Position pour les mobiles
    } else {
      // Position pour l'état normal (pas d'intro)
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    // Animation de la caméra vers la position cible avec un adoucissement
    // Modifiez 0.25 pour changer la rapidité de la transition
    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    // Animation de la rotation du modèle en fonction de la position du pointeur
    // Modifiez les divisors (10, 5) pour changer la sensibilité de la rotation
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 6, -state.pointer.x / 3, 0],
      0.125,
      delta
    );
  });

  // Rendu du groupe 3D
  return (
    <group ref={group}>{children}</group>
  );
}

export default CameraRig;
