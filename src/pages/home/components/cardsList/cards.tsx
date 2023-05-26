import React from "react";
import "./Cards.css";
import { MovieType } from "../../../../models/Film";

type MovieProps = { 
    movie: MovieType;
  }

export const Movie = ({movie}: MovieProps) => {
    return (
        <div className="movie-content">
          <h2>{movie.title}</h2>
          <img src={movie.src} />
        </div>
    );
  };
  