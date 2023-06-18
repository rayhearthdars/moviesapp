import { useContext, useEffect, useState } from "react";

import "./favorites.css";
import { FavoritesContext } from "../../context/FavoritesContext";
import { Movie } from "../../models/movie";
import { getMovieById } from "../../api/movie";
import { MoviesList } from "../home/components/MoviesList/MoviesList";

export const Favorites = () => {
  const [favMovies, setFavMovies] = useState<Movie[]>([]);

  const { favoriteList, getLocalStorage } = useContext(FavoritesContext);
  const favId = getLocalStorage();

  useEffect(() => {
    favoriteList.forEach(async (id) => {
      const result = await getMovieById(id);
      if (!favMovies.some((val) => val.id === result.id)) {
        favMovies.push(result);
        setFavMovies(favMovies.map((val) => val));
      }
    });
  }, [favoriteList]);

  useEffect(() => {
    setFavMovies(favMovies.filter((val) => favId.includes(val.id.toString())));
  }, [favoriteList]);


  return (
    <section className="favorites">
      <h2>Favorite Movies</h2>

      <MoviesList movies={favMovies} />
    </section>
  );
};
