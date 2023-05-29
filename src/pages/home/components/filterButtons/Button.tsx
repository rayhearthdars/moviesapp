import React from "react";
import './Button.css';


export const CategoryButton = ({name}:{name:string}) => {
    return (
        
        <button type="button" className="category-button">{name}</button>

    );
}