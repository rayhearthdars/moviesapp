import React from 'react';
import { Card } from './cards';
import "./cardsList.css";
import "./cards.css"
import { Movie } from '../../../../models/movie';

type CardListProps = {
  cards:Movie[]
}

export const CardsList = ({cards}:CardListProps) => {
  console.log(cards)
    return (
        <section className="card-container">
          {cards.map((item) => (
            <Card card={item} key={item.id} />
          ))}
        </section>
      );
}