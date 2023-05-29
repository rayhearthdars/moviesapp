import React from 'react';
import { useState } from 'react';
import { CardsList } from './components/cardsList/cardsList';
import { data } from '../../data/data';
import { Header } from '../../components/Header';
import { CategoriesList } from '../home/components/filterButtons/ButtonsList';



export const HomePage = () => {
    const [cards, setCards] = useState(data);
   return( <body>
    <Header/>
     <main>
    <section className="button-container">
      <CategoriesList/>
      </section>
      <CardsList cards={cards}/>
    </main>
    </body>);
}
