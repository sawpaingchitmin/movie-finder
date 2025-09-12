const SearchBar = ({ setQuery }) => {
    return (
        <input 
            type="text"
            placeholder="Search movies..."
            onChange={(e) => setQuery(e.target.value) }
            className="search-bar"
        />
    );
}

export default SearchBar;