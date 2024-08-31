import React from "react";
import CustomButton from "./CustomButton";

const ModelSwitcher = ({ activeModel, setActiveModel }) => {
  return (
    <div className="model-switcher-container">
      <div className="flex-1 flex flex-col">
        <p className="mt-2 text-gray-900 text-xs truncate">
          Modèle actuel: {activeModel === "shirt" ? "T-shirt" : "Vis"}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton
          type="outline"
          title="T-shirt"
          handleClick={() => setActiveModel("shirt")}
          customStyles="text-xs"
        />
        <CustomButton
          type="filled"
          title="Vis"
          handleClick={() => setActiveModel("screw")}
          customStyles="text-xs"
        />
      </div>
    </div>
  );
};

export default ModelSwitcher;
