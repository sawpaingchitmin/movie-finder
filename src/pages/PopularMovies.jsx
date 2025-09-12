import { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;
const PopularMovies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`
      );
      setMovies(res.data.results);
    };
    fetchMovies();
  }, [page]);

  return (
    <div>
        <div className="movie-grid">
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>  
        {movies.length > 0 && (
            <div className="pagination">
                {page > 1 ? (
                  <button className="prev" onClick={() => setPage((p) => p - 1)}>PREV</button>
                ) : null}
                <button className="next" onClick={() => setPage((p) => p + 1)}>NEXT</button>
            </div>
        )}
    </div>
  );
};

export default PopularMovies;
