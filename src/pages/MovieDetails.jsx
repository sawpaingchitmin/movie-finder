import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useContext } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const { addFavorite, removeFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        const fetchMovie = async () => {
            const res = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            );
            setMovie(res.data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <p className="loading">Loading...</p>;

    return (
        <div className="movie-details">
            <div className="details-card">
                <h1 className="detail-title">{movie.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                <h3>Overview:</h3>
                <p className="detail-overview">{movie.overview}</p>
                <p className="movie-rating">Rating:  {Math.round(movie.vote_average * 10) / 10}</p>
                <p className="release-date">Release Date: {movie.release_date}</p>
                <div className="buttons detail-buttons">
                    <button className="add detail-add" onClick={() => addFavorite(movie)}>Add</button>
                    <button className="remove detail-remove" onClick={() => removeFavorite(movie.id)}>Remove</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;