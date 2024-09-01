import React from "react";
import CustomButton from "./CustomButton";
import { screwSwitchIcon, tshirtSwitchIcon } from "../assets";

const ModelSwitcher = ({ activeModel, setActiveModel }) => {
  return (
    <div className="filepicker-container">
      <div className="flex flex-wrap gap-3 justify-center">
        <CustomButton
          handleClick={() => setActiveModel("shirt")}
          customStyles="text-xs"
          type={activeModel === "shirt" ? "filled" : "outline"} // Remplissage si actif, sinon contour
          title="shirt"
          icon={tshirtSwitchIcon}
        />
        <CustomButton
          handleClick={() => setActiveModel("screw")}
          customStyles="text-xs"
          type={activeModel === "screw" ? "filled" : "outline"} // Remplissage si actif, sinon contour
          title="screw"
          icon={screwSwitchIcon}
        />
      </div>
    </div>
  );
};

export default ModelSwitcher;
