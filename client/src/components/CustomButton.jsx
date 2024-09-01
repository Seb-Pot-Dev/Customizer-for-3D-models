import React from 'react'
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ({ type, title, customStyles, handleClick, icon }) => {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if(type === 'filled') {
            return { 
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        }else if (type === 'outline') {
            return {
                borderWidth : '1px',
                borderColor: snap.color,
                color: snap.color
            }
        }
    } 
  return (
    <button
            className={`px-2 py-1.5 flex items-center justify-center rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
        >
            {icon && (
                <img 
                    src={icon} 
                    alt="icon" 
                    className="w-8 h-8" // Taille de l'icône et espacement
                />
            )}
            {title && !icon && <span>{title}</span>}
        </button>
  )
}

export default CustomButton