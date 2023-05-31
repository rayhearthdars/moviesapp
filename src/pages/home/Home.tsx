import React from "react";
import { useState, useEffect } from "react";
import { getAllMovies, getMoviesByCategory } from "../../api/movie";
import { CardsList } from "./components/cardsList/MoviesList";
import { Header } from "../../components/Header";
import { CategoriesList } from "./components/filterButtons/CategoriesList";
import { Movie } from "../../models/movie";
import { Category } from "../../models/category";
import { AllMoviesButton } from "./components/filterButtons/AllMoviesButton";

export const HomePage = () => {
	const [cards, setCards] = useState<Movie[]>([]);
	const [category, setCategory] = useState<Category | undefined>(undefined);

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
			console.log(category);
			const result = await getMoviesByCategory(category?.id);
			setCards(result ?? []);
		};
		getByCategory();
	}, [category]);

	return (
		<>
			<Header />
			<main id="main">
				<section className="button-container">
					<AllMoviesButton getMovies={getMovies} />
					<CategoriesList getCategory={getClickedCategory} />
				</section>
				<CardsList cards={cards} />
			</main>
		</>
	);
};
