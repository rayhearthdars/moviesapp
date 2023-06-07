import React from "react";
import "./CategoryButton.css";

// I think just one button to which you pass props and retrieve the value in the homepage
// would have been easier to maintain
// Instead of the 3 buttons
export const AllMoviesButton = ({
	getMovies,
	getPageNumber,
}: {
	getMovies: () => void;
	getPageNumber: (pageNumber: number) => void;
}) => {
	const setUpcoming = () => {
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
