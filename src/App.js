import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./AppRouts/AppRoutes";
// import Header from "./Components/Header/Header";
// import HomePage from "./Views/HomePage/HomePage";
// import SearchPage from "./Views/SearchPage/SearchPage";

const App=() => {
  return (
    <BrowserRouter>
        {/*<SearchPage/>*/}
      <AppRoutes/>
    </BrowserRouter>
  );
}
export default App;
