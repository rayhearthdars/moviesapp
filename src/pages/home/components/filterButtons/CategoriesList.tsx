import React, { useEffect, useState } from "react";
import { getCategories } from "../../../../api/category";
import { CategoryButton } from "../filterButtons/CategoryButton";
import { Category } from "../../../../models/category";
import "./CategoriesList.css";
import { AllMoviesButton } from "./AllMoviesButton";
import { UpcomingButton } from "./UpcominButton";
import { TrendingButton } from "./TrendingButton";
import { getTrendingMovies } from "../../../../api/movie";

export const CategoriesList = ({
	getCategory,
	getPageNumber,
	getMovies,
	getUpcoming,
	getTrending
}: {
	getCategory: (category: Category) => void;
	getPageNumber: (pageNumber: number) => void;
	getMovies: () => Promise<void>;
	getUpcoming: () => Promise<void>;
	getTrending: () => Promise<void>;

}) => {
	const [categoriesData, setCategoriesData] = useState<Category[] | null>(null);

	useEffect(() => {
		let result;
		const getCategoriesList = async () => {
			result = await getCategories();

			setCategoriesData(result.genres);
		};
		getCategoriesList();
	}, []);

	if (categoriesData == null) return null;
	return (
		<aside className="button-container">
			<AllMoviesButton
				getMovies={getMovies}
				getPageNumber={getPageNumber}
			/>
			<UpcomingButton
				getPageNumber={getPageNumber}
				getUpcoming={getUpcoming}
			/>
			<TrendingButton getTrending={getTrending}/>
			{categoriesData.map((category) => (
				<CategoryButton
					key={category.name}
					name={category.name}
					getCategory={getCategory}
					category={category}
					getPageNumber={getPageNumber}
				/>
			))}
		</aside>
	);
};
