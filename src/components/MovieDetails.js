import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=29cefd17c4da82be124b99d144d6d4d7`);
        const data = await res.json();
        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
      <p>Title: {movie.title}</p>
      <p>Overview: {movie.overview}</p>
      {/* render other movie details */}
    </div>
  );
}

export default MovieDetails