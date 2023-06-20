import { createContext, useState } from "react";
import { favType } from "../models/FavType";

type ContextProp = {
  children: React.ReactNode;
};
type FavoritesContextProps = {
  removeFav: boolean;
  favoriteList: string[];
  toggleFavorite: (fav: favType) => void;
  getLocalStorage: () => string[];
  setLocalStorage: () => void;
  toggleRemoveFav: () => void;
  reSetFavList: () => void;
};

export const FavoritesContext = createContext({} as FavoritesContextProps);

export const FavoritesProvider = ({ children }: ContextProp) => {
  // prettier-ignore
  const getLocalStorage = () => {return JSON.parse(localStorage.getItem("favorites") || "[]");};

  // prettier-ignore
  const [favoriteList, setFavorites] = useState<string[]>( getLocalStorage().length ? getLocalStorage() : []);

  //if the favorite icon was reclicked , removeFav would be true with the function toggleRemoveFav
  const [removeFav, setRemoveFav] = useState<boolean>(false);

  //add or remove movie id from favoriteList
  const toggleFavorite = (fav: favType) => {
    if (fav.isFav) {
      favoriteList.push(fav.favId);
    } else {
      favoriteList.splice(
        favoriteList.findIndex((i) => i === fav.favId),
        1
      );
    }
    //state don't change unless we creating new array
    setFavorites(favoriteList.map((val) => val));
  };

  const toggleRemoveFav = () => {
    if (removeFav) {
      setRemoveFav(false);
      return;
    }
    setRemoveFav(true);
  };

  const setLocalStorage = () => {
    localStorage.setItem("favorites", JSON.stringify(favoriteList));
  };

  const reSetFavList = () => {
    setFavorites(getLocalStorage().length ? getLocalStorage() : []);
  };

  const value = {
    removeFav,
    favoriteList,
    toggleFavorite,
    getLocalStorage,
    setLocalStorage,
    toggleRemoveFav,
    reSetFavList,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
