import axios from "axios";

const API = process.env.REACT_APP_API_KEY;



export const getCategories = async () => {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API}`;
    let result;
    try {
        // ok you can return here as well, it will go the the catch if there is an error anyway
        result = await axios.get(url).then(res => res.data);
    }
    catch (err){
        console.log(err);
    }
    return result;
}