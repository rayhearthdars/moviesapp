import axios from "axios";
import { Movie } from "../models/movie";

const API = process.env.REACT_APP_API_KEY;




export const getMovieById = async (id:number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`;
    let result;
    try {
        result = await axios.get(url).then(res => res.data);
    }
    catch (err) {
        console.error(err);
    }
    return result;
}


export const getAllMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API}`;
    try {
        return axios.get<{results: Movie[]}>(url).then(res => res.data.results);
    }
    catch (err) {
        console.error(err);
    }
}
