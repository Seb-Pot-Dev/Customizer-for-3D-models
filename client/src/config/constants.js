import { swatch, fileIcon, ai, logoShirt, stylishShirt, model3dIcon } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "modelSwitcher",
    icon: model3dIcon
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
  },

];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
