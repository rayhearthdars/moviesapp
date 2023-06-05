import React from "react";
import "./CategoryButton.css";

export const AllMoviesButton = ({
	getMovies,
	getPageNumber,
	getClickedCategoryOtherThanGenre,
}: {
	getMovies: () => Promise<void>;
	getPageNumber: (pageNumber: number) => void;
	getClickedCategoryOtherThanGenre: (otherCategories: string | undefined) => void;
}) => {
	const setUpcoming = () => {
		getClickedCategoryOtherThanGenre("categoryAllMovies");
		getPageNumber(1);
		getMovies();
	};

	return (
		<button
			className="category-button"
			type="button"
			onClick={() => {
				setUpcoming();
			}}
		>
			All Movies
		</button>
	);
};
