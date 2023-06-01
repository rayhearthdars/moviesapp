import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies, getMoviesByCategory, getMoviesBySearch } from "../../api/movie";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Header } from "../../components/Header";
import { CategoriesList } from "./components/filterButtons/CategoriesList";
import { Movie } from "../../models/movie";
import { Category } from "../../models/category";
import { SearchBar } from "./components/SearchBar/SearchBar";
import "./HomePage.css";
import { AllMoviesButton } from "./components/filterButtons/AllMoviesButton";
import { getUpcomingMovies } from "../../api/movie";
import { UpcomingButton } from "./components/filterButtons/UpcominButton";
import { Pagination } from "./components/pagination/Pagination";

export const HomePage = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [category, setCategory] = useState<Category | undefined>(undefined);
	const [query, setQuery] = useState<string>("");


	const getPageNumber = (pageNumber:number) => {
		setPageNumber(pageNumber);
}

	const getMovies = async () => {
		const result = await getAllMovies(pageNumber);
		setMovies(result ?? []);
	};

	useEffect(() => {
		getMovies();
	}, [pageNumber]);

	const getClickedCategory = (category: Category) => {
		setCategory(category);
	};

	useEffect(() => {
		const getByCategory = async () => {
			const result = await getMoviesByCategory(category?.id);
			setMovies(result ?? []);
		};
		getByCategory();
	}, [category]);

	useEffect(() => {
		const getMoviesBySearching = async () => {
			const searchResult = await getMoviesBySearch(query);
			if (searchResult === undefined) return;
			setMovies(searchResult);
		};
		if (query !== "") {
			getMoviesBySearching();
		}
	}, [query]);

		const getUpcoming = async () => {
			const result = await getUpcomingMovies();
			setMovies(result ?? []);
		};

		useEffect(() => {
			getUpcoming();
		}, []);

	return (
		<>
			<Header />
			<SearchBar search={setQuery} />
			<main id="main">
				<aside className="button-container">
					<AllMoviesButton getMovies={getMovies} />
					<UpcomingButton getUpcoming={getUpcoming} />
					<CategoriesList getCategory={getClickedCategory} />
				</aside>
				<div className="movie_and_pagination_container">
					<MoviesList
						pageNumber={getPageNumber}
						movies={movies}
					/>
					<Pagination
						getPageNumber={getPageNumber}
						pageNumber={pageNumber}
					/>
				</div>
			</main>
		</>
	);
};
