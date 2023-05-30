import axios from "axios";

const API = process.env.REACT_APP_API_KEY;

export const getMovieById = async (id: number) => {
	const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API}`;
	let result;
	try {
		result = await axios.get(url).then((res) => res.data);
	} catch (err) {
		console.error(err);
	}
	return result;
};

export const getMoviesByCategory = async (category: string) => {
    const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/discover/movie",
        params: {
            include_adult: "false",
            include_video: "false",
            language: "en-US",
            page: "1",
            sort_by: "popularity.desc",
            with_genres: category,
        },
        headers: {
            accept: "application/json",
            'x-api-key': "Bearer " + API,
        }
    };

	    let result;
        try {
            result = (await axios.get(options.url)).request(options).then((res:any) => res.data);
        } catch(err) {
            console.error(err);
    }
        return result;
    };

