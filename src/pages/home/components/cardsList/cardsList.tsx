import React from 'react';
import { CardType } from '../../../../models/Film';
import { Card } from './Cards';
import "./CardsList.css";
import "./Cards.css"

type CardListProps = {
    cards: CardType[];
}

export const CardsList = ({cards}:CardListProps) => {
    return (
        <main className="card-container">
          {cards.map((item) => (
            <Card card={item} key={item.id} />
          ))}
        </main>
      );
}