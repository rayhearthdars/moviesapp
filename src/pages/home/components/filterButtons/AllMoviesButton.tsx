import React from "react";
import "./CategoryButton.css";
import { Movie } from "../../../../models/movie";

export const AllMoviesButton = ({ getMovies }: { getMovies: () => Promise<void> }) => {
	return (
		<button
			type="button"
			onClick={() => getMovies()}
		>
			All Movies
		</button>
	);
};
