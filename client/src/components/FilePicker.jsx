import React from "react";

import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
	return (
		<div className="filepicker-container">
			<div className="flex-1 flex flex-col items-center">
				<input
					id="file-upload"
					type="file"
					accept="image/*"
					onChange={(e) => setFile(e.target.files[0])}
				/>
				<label htmlFor="file-upload" className="filepicker-label">
					Déposer un ficher
				</label>

				<p className="mt-2 text-gray-900 text-xs truncate">
					{file === "" ? "Aucun fichier selectionné" : file.name}
				</p>
			</div>
			<div className="mt-4 flex flex-wrap gap-3">
				<CustomButton
					type="outline"
					title="Appliquer"
					handleClick={() => readFile("logo")}
					customStyles="text-xs"
				/>

			</div>
		</div>
	);
};

export default FilePicker;
