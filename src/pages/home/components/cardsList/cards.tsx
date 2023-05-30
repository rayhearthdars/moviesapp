import React from "react";
import "./cards.css";
import { Movie } from "../../../../models/movie";

type CardProps = { 
    card:Movie
  }

export const Card = ({card}: CardProps) => {
    return (
        <article className="card-content">
          <h2>{card.title}</h2>
          <img src={card.poster_path} />
        </article>
    );
  };
  