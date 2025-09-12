import { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

const API_KEY = import.meta.env.VITE_API_KEY;
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
      );
      setMovies(res.data.results);
    };
    fetchMovies();
  }, [query, page]);

  return (
    <div>
        <SearchBar setQuery={setQuery} />
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

export default Home;
