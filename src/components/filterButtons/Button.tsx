import React from "react";
import './Button.css';
import { category } from "../../models/category";

export const CategoriesButton = ({name}:category) => {
    return (
        <button type="button">{name}</button>
    );
}