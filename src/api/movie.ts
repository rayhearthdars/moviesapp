import axios from "axios";
import { Movie } from "../models/movie";

const API = process.env.REACT_APP_API_KEY;

export const getMovieById = async (id: string | undefined) => {
	if (id == null) return;
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`;
	let result;
	try {
		result = await axios.get(url).then((res) => res.data);
	} catch (err) {
		console.error(err);
	}
	return result;
};

export const getMoviesByCategory = async (category: number | undefined) => {
	if (category == null) return;
	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=${category}`;
	let result;
	try {
		result = await axios.get(url).then((res) => res.data);
	} catch (err) {
		console.error(err);
	}
	return result.results;
};

export const getAllMovies = async () => {
	const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API}`;
	try {
		return axios.get<{ results: Movie[] }>(url).then((res) => res.data.results);
	} catch (err) {
		console.error(err);
	}
};
