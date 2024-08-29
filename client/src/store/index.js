import { proxy } from "valtio";

const state = proxy({
	intro: true,
	color: "#EFBD48",
	isLogoTexture: false,
	isLogoTexture1: false,
	isLogoTexture2: false,
	isLogoTexture3: false,
	isFullTexture: false,
	logoDecal: "./logo-wurth-and-name-black-squared.png",
	logoDecal1: "./logo-wurth-and-name-black-squared.png",
	logoDecal2: "./logo-wurth-squared.png",
	logoDecal3: "./logo-wurth-squared.png",
	textureDecal: "./logo-wurth-squared.png"
});

export default state;
