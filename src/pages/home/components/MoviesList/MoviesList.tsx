import React from "react";
import { MovieCard } from "./Movie";
import "./MoviesList.css";
import { Movie } from "../../../../models/movie";

type MovieListProps = {
	movies: Movie[];
};

export const MoviesList = ({ movies }: MovieListProps) => {
	return (
		<section className="movie-container">
			{movies.map((item) => (
				<MovieCard
					movie={item}
					key={item.id}
				/>
			))}
		</section>
	);
};
