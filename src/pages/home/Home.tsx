import React from 'react';
import { useState } from 'react';
import { CardsList } from './components/cardsList/cardsList';
import { data } from '../../data/data';
import { Header } from '../../components/Header';

const DisplayHeader = () => {return(<Header/>)}

const DisplayCardsList = () => {

    const [cards, setCards] = useState(data);
    return (
    <section>
      <CardsList cards={cards} />
    </section>
  );
  };

export const HomePage = () => {
   return( <body>
    <Header/>
    <main>
      <DisplayCardsList/>
    </main>
    </body>);
}