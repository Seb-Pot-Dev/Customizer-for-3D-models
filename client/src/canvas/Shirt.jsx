import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked.glb')
  const logoTexture1 = useTexture(snap.logoDecal1);
  const logoTexture2 = useTexture(snap.logoDecal2);
  const fullTexture = useTexture(snap.fullDecal);
  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={0.3125}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture1 && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.25}
            map={logoTexture1}
          />
        )}
        {snap.isLogoTexture2 && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture2}
          />
        )}
      </mesh>
    </group>
  )
}

export default Shirt