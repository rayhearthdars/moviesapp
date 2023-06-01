import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies, getMoviesByCategory, getMoviesBySearch } from "../../api/movie";
import { MoviesList } from "./components/MoviesList/MoviesList";
import { Header } from "../../components/Header";
import { CategoriesList } from "./components/filterButtons/CategoriesList";
import { Movie } from "../../models/movie";
import { Category } from "../../models/category";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { AllMoviesButton } from "./components/filterButtons/AllMoviesButton";


export const HomePage = () => {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [category, setCategory] = useState<Category | undefined>(undefined);
	const [query, setQuery] = useState<string>("");

	const getMovies = async () => {
		const result = await getAllMovies();
		setCards(result ?? []);
	};
	useEffect(() => {
		getMovies();
	}, []);

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
			if (searchResult == undefined) return;
			setMovies(searchResult);
		}
		if (query !="") {
			getMoviesBySearching();

		}
		
	}, [query])
	
	return (
		<>
			<Header />
			<SearchBar search={setQuery}/>
			<main id="main">
				<section className="button-container">
					<AllMoviesButton getMovies={getMovies} />
					<CategoriesList getCategory={getClickedCategory} />
				</section>
				<MoviesList movies={movies} />
			</main>
		</>
	);
};
