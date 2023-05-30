import React from 'react';
import { Card } from './cards';
import "./cardsList.css";
import "./cards.css"
import { Movie } from '../../../../models/movies';

type CardListProps = {
  cards:Movie[]
}

export const CardsList = ({cards}:CardListProps) => {
    return (
        <section className="card-container">
          {cards.map((item) => (
            <Card card={item} key={item.id} />
          ))}
        </section>
      );
}