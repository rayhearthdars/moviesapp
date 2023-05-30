import React from 'react';
import { useState, useEffect } from 'react';
import { getAllMovies } from '../../api/movie';
import { CardsList } from './components/cardsList/cardsList';
import { Header } from '../../components/Header';
import { CategoriesList } from '../home/components/filterButtons/ButtonsList';
import { Movie } from '../../models/movie';



export const HomePage = () => {
    const [cards, setCards] = useState<Movie[] | null>(null);
    useEffect(() =>{
      const getMovies = async () => {
        const result = await getAllMovies();
        setCards(result ?? null);
      }
      getMovies();
    }, [])

    if (cards == null) return null;

   return( <body>
    <Header/>
     <main id='main'>
    <section className="button-container">
      <CategoriesList/>
      </section>
      <CardsList cards={cards}/>
    </main>
    </body>);
}
