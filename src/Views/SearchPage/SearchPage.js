import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../../Components/MovieList/MovieList";
import { API_KEY, BASE_URL } from "../../Config/config";

import './styles.css';
const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        // Make an API call with the searchQuery and update searchResults state
        axios.get(`${BASE_URL}search/movie?language=ru-RU&api_key=${API_KEY}&query=${searchQuery}`)
            .then(({ data }) => setSearchResults(data.results));
    }

    return (
        <div className={'main'}>
            <h1>SearchPage</h1>
            <input
                type="text"
                placeholder="Search for movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <MovieList movies={searchResults} />
        </div>
    );
}

export default SearchPage;