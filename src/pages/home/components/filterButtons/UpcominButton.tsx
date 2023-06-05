import React from "react";
import "./CategoryButton.css";

export const UpcomingButton = ({
	getUpcoming,
	getPageNumber,
	getClickedCategoryOtherThanGenre,
}: {
	getUpcoming: () => Promise<void>;
	getPageNumber: (pageNumber: number) => void;
	getClickedCategoryOtherThanGenre: (otherCategories: string |undefined) => void;
}) => {
	const setUpcoming = () => {
		getClickedCategoryOtherThanGenre("upComingCategory");
		getPageNumber(1);
		getUpcoming();
	};

	return (
		<button
			className="category-button"
			type="button"
			onClick={() => {
				setUpcoming();
			}}
		>
			Upcoming
		</button>
	);
};
