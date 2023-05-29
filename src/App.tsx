import React, { useState } from "react";
import { data } from "./data/data";
import { Card } from "./pages/home/components/cardsList/cards";
import { CardsList } from "./pages/home/components/cardsList/cardsList";
import { CardType } from "./models/movie";

const App = () => {

  const [cards, setCards] = useState(data);
  return (
  <main>
    <CardsList cards={cards} />
  </main>
);
};

export default App;
