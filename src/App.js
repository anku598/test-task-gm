import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import MovieCard from "./components/MovieCard.js";
import MovieDetails from "./components/MovieDetails.js";
import './app.css'


const App = () => {
  return (

    <HashRouter>

      <Routes>
        <Route path="/" exact element={<MovieCard />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>

    </HashRouter>


  );
}
export default App