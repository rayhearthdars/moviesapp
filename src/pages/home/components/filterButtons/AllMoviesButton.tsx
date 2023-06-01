import React from "react";
import "./CategoryButton.css";

export const AllMoviesButton = ({ getMovies }: { getMovies: () => Promise<void> }) => {
	return (
		<button
			className="category-button"
			type="button"
			onClick={() => getMovies()}
		>
			All Movies
		</button>
	);
};
