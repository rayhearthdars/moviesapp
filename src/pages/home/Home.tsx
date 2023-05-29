import React from 'react';
import { useState } from 'react';
import { CardsList } from './components/cardsList/cardsList';
import { data } from '../../data/data';
import { Header } from '../../components/Header';



export const HomePage = () => {
    const [cards, setCards] = useState(data);
   return( <body>
    <Header/>
    <main>
      <CardsList cards={cards}/>
    </main>
    </body>);
}
