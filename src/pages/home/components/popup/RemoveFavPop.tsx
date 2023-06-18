import { useContext } from "react";
import { FavoritesContext } from "../../../../context/FavoritesContext";
import "./remove-fav-pop.css";

export const RemoveFavPop = () => {
  const { reSetFavList, toggleRemoveFav, removeFav, setLocalStorage } =
    useContext(FavoritesContext);

  const removeFromFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLocalStorage();
    cancel(event);
  };

  const cancel = (event: React.MouseEvent<HTMLElement>) => {
    const button = event.target as HTMLButtonElement;
    const parentEl = button.closest(".confirm-remove");
    parentEl?.classList.add("hide");
    toggleRemoveFav();
    reSetFavList();
  };

  return (
    <div
      className={`confirm-remove ${!removeFav ? "hide" : ""}`}
      onClick={cancel}
    >
      <div className="overlay"></div>
      <div className="confirm-remove-contents">
        <p>{`Are you sure you want to remove from you favorites`}</p>
        <div className="buttons">
          <button className="head-btn" onClick={removeFromFavorites}>
            Yes
          </button>
          <button className="head-btn" onClick={cancel}>
            no
          </button>
        </div>
      </div>
    </div>
  );
};
