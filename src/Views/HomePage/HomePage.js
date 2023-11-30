import React, {useEffect, useState} from "react";
import axios from "axios";
import MovieList from "../../Components/MovieList/MovieList";
import {API_KEY, BASE_URL} from "../../Config/config";
import Carousel from "../../Components/Carousel/Carousel";
import SearchPage from "../SearchPage/SearchPage";

const HomePage = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}discover/movie?language=ru-RU&api_key=${API_KEY}`)
            .then(({data})=> setMovies(data.results))
    }, []);
    console.log(movies)
    return (
        <>
            <Carousel movies={movies}/>
        <div className="container">
            <SearchPage/>
            <MovieList movies={movies}/>
        </div>
        </>
    )
}

export default HomePage;