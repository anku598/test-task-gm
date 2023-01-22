import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const MovieCard = () => {
    const [movies, setMovies] = useState([]);
    // const history = useHistory();

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=29cefd17c4da82be124b99d144d6d4d7')
            .then(response => response.json())
            .then(data => setMovies(data.results.slice(0 , 3)));
    }, []);

    return (
        <div>
            {movies.map(movie => (
                <Link key={movie.id} to={`/movie/${movie.id}`} >
                        <div >
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                    <h2>{movie.title}</h2>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieCard;