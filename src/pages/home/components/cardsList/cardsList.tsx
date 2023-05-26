import React from 'react';
import { MovieType } from '../../../../models/Film';
import { Movie } from './Cards';
import "./CardsList.css";
import "./Cards.css"

type MovieListProps = {
    movies: MovieType[];
}

export const MoviesList = ({movies}:MovieListProps) => {
    return (
        <div className="movie-container">
          {movies.map((item) => (
            <Movie movie={item} key={item.id} />
          ))}
        </div>
      );
}