import React from "react";


export const TrendingButton = ({ getTrendingButton }: { getTrendingButton: () => Promise<void> }) => {
	return (
		<button
			className="category-button"
			type="button"
			onClick={() => getTrendingButton()}
		>
			Trending
		</button>
	);
};
