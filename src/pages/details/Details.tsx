import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { getMovieById } from '../../api/movie';
import { Movie } from "../../models/movie";


export const Details = () => {
    const [movieData, setMovieData] = useState<Movie | null>(null);
    useEffect(() => {
        const getMovie = async () => {
            const result = await getMovieById(550);
            setMovieData(result);
        }
        getMovie();
            
    }, [movieData])

    if (movieData == null) return null;
    return (
        <main>
            <Link to="/" ><button type="button">Go Back</button></Link>
            <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt={`poster for the fiml ${movieData.title}`} />
            <h2>{movieData.title}</h2>
            <div>
                <h3>Ratings</h3>
                <div>
                    <p>{movieData.popularity}</p>
                </div>              
            </div>
            <div>
                <h3>Release Date</h3>
                <p>{movieData.release_date}</p>
            </div>
            <div>
                <h3>Synopsis</h3>
                <p>{movieData.overview}</p>
            </div>
        </main>
    )
}
