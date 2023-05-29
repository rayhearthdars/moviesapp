import React from "react";
import { genre } from "../../data/data";
import { CategoriesButton } from './Button';
import './ButtonsList.css';


export const CategoryList = () => {


    return (
    <>
        {
            genre.map(category => (
                <CategoriesButton key={category.id} name={category.name}  />))
            }
    </>
    );
}