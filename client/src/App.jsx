import React, { useState } from 'react';
import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';

function App() {

  const [activeModel, setActiveModel] = useState('shirt'); // 'shirt' ou 'screw'

  return (
    <main className='app transition-all ease-in'>
      <Home />
      <Canvas activeModel={activeModel}/>
      <Customizer activeModel={activeModel} setActiveModel={setActiveModel}/>
    </main>
  )
}

export default App
