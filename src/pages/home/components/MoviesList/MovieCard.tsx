
import "./MovieCard.css";
import { Movie } from "../../../../models/movie";
import { Link } from "react-router-dom";
import { FavIcon } from "../favButton/FavIcon";

type MovieProps = {
  movie: Movie;
};

export const MovieCard = ({ movie }: MovieProps) => {
  return (
    <div className="fav-icon-position">
      <FavIcon id={movie.id} />

      <Link to={`/details/${movie.id}`} style={{ textDecoration: "none" }}>
        <article className="movie-content ">
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="Movie poster"
          />
        </article>
      </Link>
    </div>
  );
};
