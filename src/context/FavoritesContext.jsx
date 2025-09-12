import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addFavorite = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id )) {
        const newFavorites = [...favorites, movie];
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
        alert("Added to Favorites");
    } else {
       alert("Movie is already in Favorites");
    }
  };

  const removeFavorite = (id) => {
    if (!favorites.find((movie) => movie.id === id)) {
        alert("Movie not found in Favorites");
        return;
    }
    const newFavorites = favorites.filter((movie) => movie.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    alert("Removed from Favorites");
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
        {children}
    </FavoritesContext.Provider>
  );
};
