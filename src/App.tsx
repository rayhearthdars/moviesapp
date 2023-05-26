import React, { useState } from "react";
import { data } from "./data/data";
import { Card } from "./pages/home/components/cardsList/Cards";
import { CardsList } from "./pages/home/components/cardsList/CardsList";
import { CardType } from "./models/Film";

const App = () => {

  const [cards, setCards] = useState(data);
  return (
  <div className="main">
    <CardsList cards={cards} />
  </div>
);
};

export default App;
