import React from "react";
import { MovieCard } from "./MovieCard";
import "./MoviesList.css";
import { Movie } from "../../../../models/movie";

type MovieListProps = {
	movies: Movie[];
	pageNumber: (pageNumber: number) => void;
};

export const MoviesList = ({ movies, pageNumber }: MovieListProps) => {
	let pages: number[] = [1];
	for (let i = 1; i < 21; i++) {
		pages.push(i);
	}

	return (
		<>
			<section className="movie-container">
				{movies.map((item) => (
					<MovieCard
						movie={item}
						key={item.id}
					/>
				))}
			</section>
			<section>
				{pages.map((page) => (
					<button
						type="button"
						onClick={() => pageNumber(page)}
					>
						{page}
					</button>
				))}
			</section>
		</>
	);
};
