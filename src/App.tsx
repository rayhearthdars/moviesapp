import React, { useState } from "react";
import { CardType } from "./models/movie";
import { DisplayCardsList } from "./pages/home/Home";
import { DisplayHeader } from "./pages/home/Home";
import { Header } from "./components/Header";
import "./App.css"

const App = () => {

  return (
    <body>
      <Header/>
  <main>
    <DisplayCardsList/>
  </main>
  </body>
);
};

export default App;
