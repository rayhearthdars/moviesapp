import { useContext } from "react";
import { FavoritesContext } from "../../../../context/FavoritesContext";
import "./FavIcon.css"
type FavIconProps = {
  id: number;
};
export const FavIcon = ({ id }: FavIconProps) => {
  const { getLocalStorage, setLocalStorage, toggleFavorite, toggleRemoveFav } =
    useContext(FavoritesContext);
  const favs = getLocalStorage();

  const favIconClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLDivElement;

    if (element.className.includes("favf")) {
      toggleFavorite({
        favId: id.toString(),
        isFav: true,
      });
      setLocalStorage();
    } else {
      toggleRemoveFav();
      toggleFavorite({
        favId: id.toString(),
        isFav: false,
      });
    }
  };

  return (
    <div className="fav-icon">
      <div
        className={`fav ${
          favs.some((val) => val === id.toString()) ? "favt" : "favf"
        }`}
        id="fav"
        onClick={favIconClick}
      >
        <div className="add-to-fav">{`${
          favs.some((val) => val === id.toString())
            ? "Remove From Fav"
            : "Add To Fav"
        }`}</div>
      </div>
    </div>
  );
};
