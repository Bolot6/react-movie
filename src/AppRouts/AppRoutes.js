import {Route, Routes} from "react-router-dom";
import HomePage from "../Views/HomePage/HomePage";
import MoviePage from "../Views/MoviePage/MoviePage"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/movie" element={<MoviePage/>}/>
        </Routes>
    )
}

export default AppRoutes;