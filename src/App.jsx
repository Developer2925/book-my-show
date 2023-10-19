// Axios
import axios from 'axios';

// HOC
import DefaultHOC from './HOC/Default.HOC';
import MovieHOC from './HOC/Movie.HOC';
import PlaysHOC from './HOC/Plays.HOC';

// Pages
import HomePage from './Pages/Home.page';
import MoviePage from './Pages/Movie.page';
import PlaysPage from './Pages/Plays.page';

// Slick CSS Files (As we need Carousals at most of the components hence, we're pasting this file in App.jsx so that it will render every component with carousals)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Axios Default Settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = import.meta.env.VITE_API_KEY;


function App() {
  return (
    <>
      <DefaultHOC path="/" exact Component={HomePage} />
      <MovieHOC path="/movie/:id" exact Component={MoviePage}/>
      <PlaysHOC path="/plays" exact Component={PlaysPage} />
    </>
  )
}

export default App;


