import React, {useEffect, useState} from "react";
import { getCategories } from "../../../../api/category";
import { CategoryButton } from './Button';
import {Category} from "../../../../models/category"
import './ButtonsList.css';


export const CategoriesList = () => {
    const [categoriesData, setCategoriesData] = useState<Category[] | null>(null)

    useEffect(() => {
        let result;
        const getCategoriesList = async () => {
            result = await getCategories();
                console.log(result);

            setCategoriesData(result.genres);
        }
        getCategoriesList();
    }, [])

    
    if (categoriesData === null) return null
    return (
        <>
            {
                categoriesData.map(category => (
                    <CategoryButton key={category.name} name={category.name}  />))
                }
        </>
    );
}