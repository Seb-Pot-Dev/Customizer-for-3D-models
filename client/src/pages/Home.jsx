import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import { 
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Home = () => {
  const snap = useSnapshot(state);
  return (
    <animatePresence>
      {snap.intro && (
        <motion.div className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
            src='./threejs.png'
            alt="logo"
            className='w-8 h-8 object-contain'
          />
          </motion.header>
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>LETS<br className='xl:block hidden'/>DO IT</h1>
            </motion.div>
            <motion.div {...headContentAnimation}
            className='flex flex-col gap-5-'>
              <p className='max-w-md font-normal text-gray-600 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque esse, neque quia, eveniet nam amet optio porro vero molestias <strong>vitae rerum odio dolorem</strong>{" "} delectus aliquid necessitatibus quas. In, ducimus eligendi!</p>
            
              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.div>
        
      )}
    </animatePresence>
  )
}

export default Home