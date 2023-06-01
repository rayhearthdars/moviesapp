import React from "react";
import "./CategoryButton.css";


export const UpcomingButton = ({ getUpcoming }: { getUpcoming: () => Promise<void> }) => {
	return (
		<button
			className="category-button"
			type="button"
			onClick={() => getUpcoming()}
		>
			Upcoming
		</button>
	);
};
