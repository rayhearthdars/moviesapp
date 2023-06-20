import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Header } from './components/Header';
import { Details } from "./pages/details/Details";
import { HomePage } from "./pages/home/HomePage";
import { Header } from "./components/Header";
import { FavoritesProvider } from "./context/FavoritesContext";
import { Favorites } from "./pages/favorites/Favorites";

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path={`/details/:movieId`} element={<Details />} />
          <Route path={`/favorites`} element={<Favorites />} />
        </Routes>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
