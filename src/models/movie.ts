export type Movie = {
	id: number;
	title: string;
	poster_path: string;
	vote_average: number;
	release_date: string;
	overview: string;
	// genre_ids does not exist on the movie data, it is a list of categories with id and name
	genre_ids: number[];
};
