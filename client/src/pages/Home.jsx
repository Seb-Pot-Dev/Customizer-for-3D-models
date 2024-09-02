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
const Home = () => {
	const snap = useSnapshot(state);
	return (
		<AnimatePresence>
			{snap.intro && (
				<motion.div className="home" {...slideAnimation("left")}>
					<motion.div
						className="home-content"
						{...headContainerAnimation}
					>
						<motion.div
							{...headTextAnimation}
							className="flex gap-36 "
						>
							<h1 className="head-text inline-flex align-baseline text-justify">
								Micro-projet <br className="xl:block hidden" />
								React + 3D
							</h1>
							<motion.header {...slideAnimation("down")}>
								<div className="container-react-logo">
									<span className="react-logo">
										<span className="nucleo"></span>
									</span>
								</div>
							</motion.header>
						</motion.div>
						<motion.div
							{...headContentAnimation}
							className="flex flex-col gap-5-"
						>
							<p className="max-w-md font-normal text-gray-600 text-base mb-4 text-justify">
								Ce projet exploite <strong>React</strong> et
								<strong> react-three-fiber (R3F)</strong> pour
								instancier un <strong>objet 3D</strong>. La
								bibliothèque
								<strong> Valtio</strong> est employée pour
								suivre l'état et <strong>Framer Motion</strong>{" "}
								pour créer des animations fluides. Pour
								personnaliser le modèle,{" "}
								<strong>react-color</strong> m'as permit
								d'instancier un selecteur de couleurs
								user-friendly. Il s'agit d'une démonstration de
								l'intégration de scène en trois dimensions dans
								une application web moderne.
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
