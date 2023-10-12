import { Route, Routes } from 'react-router-dom';
// HOC
import DefaultHOC from './HOC/Default.HOC';

// Pages
import HomePage from './Pages/Home.page';

// Slick CSS Files (As we need Carousals at most of the components hence, we're pasting this file in App.jsx so that it will render every component with carousals)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <DefaultHOC path="/" exact Component={HomePage}/>
    </>
  )
}

export default App;


