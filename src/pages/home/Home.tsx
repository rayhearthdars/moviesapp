import React from "react";
import "./Home.css";
import { useState } from "react";
import { CardsList } from "./components/cardsList/cardsList";
import { data } from "../../data/data";
import { Header } from "../../components/Header";
import { CategoryList } from "./components/filterButtons/ButtonsList";


export const HomePage = () => {
    const [cards, setCards] = useState(data);
   return( <body>
    <Header/>
    <main id="main">
    <section className="button-container">
      <CategoryList/>
      </section>
      <CardsList cards={cards}/>
    </main>
    </body>);
}
