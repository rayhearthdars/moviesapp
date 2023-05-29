import React from 'react';
import { Card } from './cards';
import "./cardsList.css";
import "./cards.css"
import { CardType } from '../../../../models/movie';

type CardListProps = {
  cards:CardType[]
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