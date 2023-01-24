import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import MovieCard from './components/MovieCard/MovieCard';
import MovieDetails from './components/MovieDetails/MovieDetails';
import './app.scss'
import Header from "./components/Header/Header";

const App = () => {
  return (

    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<MovieCard />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </HashRouter>
  );
}
export default App