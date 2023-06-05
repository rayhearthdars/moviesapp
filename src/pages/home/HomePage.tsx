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
import { getUpcomingMovies } from "../../api/movie";
import { Pagination } from "./components/pagination/Pagination";

export const HomePage = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [category, setCategory] = useState<Category | undefined>(undefined);
	const [query, setQuery] = useState<string>("");
	const [categoryOtherThanGenres, setCategoryOtherThanGenres] = useState<string | undefined>(undefined);

	const getPageNumber = (pageNumber: number) => {
		setPageNumber(pageNumber);
	};

	const getMovies = async () => {
		const result = await getAllMovies(pageNumber);
		setMovies(result ?? []);
	};
	useEffect(() => {
		getMovies();
	}, [pageNumber]);

	const getClickedCategory = (category: Category) => {
		setCategoryOtherThanGenres(undefined);
		setCategory(category);
	};

	const getClickedCategoryOtherThanGenre = (otherCategories: string | undefined) => {
		setCategoryOtherThanGenres(otherCategories);
	};

	const getByCategory = async () => {
		const result = await getMoviesByCategory(category?.id, pageNumber);
		setMovies(result ?? []);
		setCategoryOtherThanGenres(undefined);
	};
	useEffect(() => {
		getByCategory();
	}, [category, pageNumber]);

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
				<CategoriesList
					getCategory={getClickedCategory}
					getPageNumber={getPageNumber}
					getMovies={getMovies}
					getUpcoming={getUpcoming}
					getClickedCategoryOtherThanGenre={getClickedCategoryOtherThanGenre}
				/>

				<div className="movie_and_pagination_container">
					<MoviesList
						pageNumber={getPageNumber}
						movies={movies}
					/>
					<Pagination
						getPageNumber={getPageNumber}
						pageNumber={pageNumber}
						getByCategory={getByCategory}
						category={category}
						categoryOtherThanGenres={categoryOtherThanGenres}
						getUpcoming={getUpcoming}
						getMovies={getMovies}
					/>
				</div>
			</main>
		</>
	);
};
