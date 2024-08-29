import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  const logoTexture = useTexture(snap.logoDecal);
  const logoTexture1 = useTexture(snap.logoDecal1);
  const logoTexture2 = useTexture(snap.logoDecal2);
  const logoTexture3 = useTexture(snap.logoDecal3);
  const isFullTexture = useTexture(snap.textureDecal);

  useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

  const stateString = JSON.stringify(snap);

  return (
      <group key={stateString}>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.06, 0]}
            rotation={[0, 0, 0]}
            scale={0.275}
            map={logoTexture}
          />
        )}
        {snap.isLogoTexture1 && (
          <Decal
            position={[0, 0.06, 0]}
            rotation={[0, 0, 0]}
            scale={0.275}
            map={logoTexture1}
          />
        )}
        {snap.isLogoTexture2 && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.3125}
            map={logoTexture2}
          />
        )}
        {snap.isLogoTexture3 && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture3}
          />
        )}
        {snap.isFullTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={isFullTexture}
          />
        )}
      </mesh>
    </group>
  )
  
}

export default Shirt