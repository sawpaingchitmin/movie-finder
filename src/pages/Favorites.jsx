import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
    const { favorites } = useContext(FavoritesContext);

    if (favorites.length === 0) return <div className="no-favorites"><p>No favorite movies yet.</p></div>

    return (
        <div className="movie-grid">
            {favorites.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default Favorites;