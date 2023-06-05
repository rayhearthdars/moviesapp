import React from "react";
import "./CategoryButton.css";

export const UpcomingButton = ({ getUpcoming, getPageNumber }: { getUpcoming: () => Promise<void>; getPageNumber: (pageNumber: number) => void }) => {
	return (
		<button
			className="category-button"
			type="button"
			onClick={() => {
				getPageNumber(1);
				getUpcoming();
			}}
		>
			Upcoming
		</button>
	);
};
