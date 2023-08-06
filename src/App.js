import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./style/landingPages.css"
import AnimePages from './pages/Anime/AnimePage';
import ForYouPages from './pages/forYou/ForYouPages';
import SearchPage from './pages/SearchPage';
import TvSeriesPopular from './pages/TvSeries/TvSeriesPopular';
import Detail from "./pages/detail/Detail";
import DetailTv from "./pages/detail/DetailTv";
import NotFound from "./pages/NotFound";


const App = () => {

  return (
    <div>
      {/* start Routing Pages */}
      <Router>
        <Routes>
          <Route path='/' element={<ForYouPages />} />
          <Route path='/anime' element={<AnimePages />} />
          <Route path='/tvmovies' element={<TvSeriesPopular />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/movie/:id' element={<Detail />} />
          <Route path="/tv/:id" element={<DetailTv />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      {/* End Route Pages */}
    </div >
  );
}

export default App;
