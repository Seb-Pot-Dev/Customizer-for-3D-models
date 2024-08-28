import { proxy } from "valtio";

const state = proxy({
	intro: true,
	color: "#EFBD48",
	isLogoTexture1: false,
	isLogoTexture2: false,
	isFullTexture: true,
	// logoDecal: "./threejs.png",
	logoDecal1: "./logo-wurth-and-name-black-squared.png",
	logoDecal2: "./logo-wurth-squared.png",
	fullDecal: "./logo-wurth-squared.png",
});

export default state;
