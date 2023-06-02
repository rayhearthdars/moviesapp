import React from "react";
import "./CategoryButton.css";

export const AllMoviesButton = ({ getMovies, getPageNumber }: { getMovies: () => Promise<void>, getPageNumber: (pageNumber: number) => void }) => {
	return (
		<button
			className="category-button"
			type="button"
			onClick={() => {
				getPageNumber(1);
				getMovies();
			}}
		>
			All Movies
		</button>
	);
};
