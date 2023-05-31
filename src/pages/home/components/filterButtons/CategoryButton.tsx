import React from "react";
import "./CategoryButton.css";
import { Category } from "../../../../models/category";

type CategoryButtonProps = {
	name: string;
	getCategory: (category: Category) => void;
	category: Category;
};

export const CategoryButton = ({ category, name, getCategory }: CategoryButtonProps) => {
	return (
		<button
			type="button"
			onClick={() => getCategory(category)} className="category-button"
		>
			{name}
		</button>
		
	);
};
