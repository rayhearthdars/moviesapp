import React from "react";


export const TrendingButton = ({ getTrending }: { getTrending: () => void} => {
	return (
		<button
			className="category-button"
			type="button"
			onClick={() => getTrending()}
		>
			Trending
		</button>
	);
};
