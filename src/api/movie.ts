import axios from "axios";

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
