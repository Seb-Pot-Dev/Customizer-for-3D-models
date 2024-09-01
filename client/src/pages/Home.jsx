import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
	headContainerAnimation,
	headContentAnimation,
	headTextAnimation,
	slideAnimation,
} from "../config/motion";
import Cube from "../canvas"
const Home = () => {
	const snap = useSnapshot(state);
	return (
    
		<AnimatePresence>
      
			{snap.intro && (
				<motion.div className="home" {...slideAnimation("left")}>
					<motion.header {...slideAnimation("down")}>
          <div className="container ">
            <span className="react-logo">
              <span className="nucleo"></span>
            </span>
          </div>
					</motion.header>
					<motion.div
						className="home-content"
						{...headContainerAnimation}
					>
						<motion.div {...headTextAnimation}>
							<h1 className="head-text">
								Micro-projet <br className="xl:block hidden" />
								React + 3D
							</h1>
						</motion.div>
						<motion.div
							{...headContentAnimation}
							className="flex flex-col gap-5-"
						>
							<p className="max-w-md font-normal text-gray-600 text-base mb-4">
								Ce projet exploite <strong>React</strong>,{" "}
								<strong>react-three-fiber</strong> et{" "}
								<strong>ThreeJS</strong> pour instancier un{" "}
								<strong>objet 3D</strong> et intéragir avec. A travers
								des outils simples, l'utilisateur devient acteur
								de la scène. L'interface inclut des
								fonctionnalités avancées comme la
								personnalisation des textures. Il s'agit d'une
								démonstration de l'intégration de scène en trois
								dimensions dans une application web moderne.
							</p>

							<CustomButton
								type="filled"
								title="C'est parti!"
								handleClick={() => {
									state.intro = false;
									state.isVisible = true;
								}}
								customStyles="w-fit px-4 py-2.5 font-bold text-sm"
							/>
              
						</motion.div>
					</motion.div>
				</motion.div>
			)}      
		</AnimatePresence>
	);
};

export default Home;
