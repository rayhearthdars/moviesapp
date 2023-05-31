import React from "react";
import "./Movie.css";
import { Movie } from "../../../../models/movie";
import {Link} from 'react-router-dom'

type CardProps = { 
    card:Movie
  }

export const Card = ({card}: CardProps) => {
	return (
		<Link to={`/details/${card.id}`}>
			<article className="card-content">
				<h2>{card.title}</h2>
				<img
					src={`https://image.tmdb.org/t/p/w500/${card.poster_path}`}
					alt="Movie poster"
				/>
			</article>
		</Link>
	);
  };
  