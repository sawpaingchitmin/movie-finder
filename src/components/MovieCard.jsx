import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <h3 className="movie-title">{movie.title}</h3>
      <p className="rating">Rating:  {Math.round(movie.vote_average * 10) / 10}</p>
      <p className="year">Year: {movie.release_date ? movie.release_date.split("-")[0] : "Unknown"}</p>
      <div className="buttons">
        <button className="add" onClick={() => addFavorite(movie)}>Add</button>
        <button className="remove" onClick={() => removeFavorite(movie.id)}>Remove</button>
      </div>
    </div>
  );
};

export default MovieCard;
