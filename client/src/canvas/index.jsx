import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import Shirt from './Shirt';
import Screw from './Screw';
import Backdrop  from './Backdrop';
import CameraRig from './CameraRig';

const CanvasModel = ({activeModel}) => {
  return (
    <Canvas
      shadows
      camera={{position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-w-full h-full transition-all ease-in'
    >
      <ambientLight intensity={0.6}/>
      <Environment preset='city'/>
      
      <CameraRig>
        <Backdrop/>
        <Center>
          {activeModel === 'shirt' ? <Shirt/> : <Screw/>}        
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel