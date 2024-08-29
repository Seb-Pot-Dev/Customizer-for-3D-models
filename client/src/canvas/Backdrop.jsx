import React, {useRef} from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';


const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
  ref={shadows}
  temporal
  frames={120}
  alphaTest={0.8}

  
  scale={3} // Réduire légèrement l'échelle
  rotation={[Math.PI / 2, 0, 0]}
  position={[0, 0, -0.14]}
>


<RandomizedLight
  amount={4}
  radius={9}
  intensity={3}
  ambient={0.25}
  position={[5, 5, -10]}
  shadowMapSize={[4096, 4096]} // Taille de la carte d'ombres augmentée
/>
<RandomizedLight
  amount={4}
  radius={5}
  intensity={0.25}
  ambient={0.55}
  position={[-5, 5, -9]}
  shadowMapSize={[4096, 4096]} // Taille de la carte d'ombres augmentée
/>


      
    </AccumulativeShadows>
  )
}

export default Backdrop