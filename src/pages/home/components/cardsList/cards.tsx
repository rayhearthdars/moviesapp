import React from "react";
import "./cards.css";
import { CardType } from "../../../../models/movie";

type CardProps = { 
    card:CardType
  }

export const Card = ({card}: CardProps) => {
    return (
        <article className="card-content">
          <h2>{card.title}</h2>
          <img src={card.src} />
        </article>
    );
  };
  