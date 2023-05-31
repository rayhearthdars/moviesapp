import React, { useEffect, useState } from "react";
import { getCategories } from "../../../../api/category";
import { CategoryButton } from "../filterButtons/CategoryButton";
import { Category } from "../../../../models/category";
import "./CategoriesList.css";

export const CategoriesList = ({ getCategory }: { getCategory: (category: Category) => void }) => {
	const [categoriesData, setCategoriesData] = useState<Category[] | null>(null);

	useEffect(() => {
		let result;
		const getCategoriesList = async () => {
			result = await getCategories();

			setCategoriesData(result.genres);
		};
		getCategoriesList();
	}, []);

	if (categoriesData === null) return null;
	return (
		<>
			{categoriesData.map((category) => (
				<CategoryButton
					key={category.name}
					name={category.name}
					getCategory={getCategory}
					category={category}
				/>
			))}
		</>
	);
};
