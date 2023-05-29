import React from 'react';
import { useState } from 'react';
import { CardsList } from './components/cardsList/cardsList';
import { data } from '../../data/data';
import { Header } from '../../components/Header';

export const DisplayHeader = () => {return(<Header/>)}

export const DisplayCardsList = () => {

    const [cards, setCards] = useState(data);
    return (
    <section>
      <CardsList cards={cards} />
    </section>
  );
  };