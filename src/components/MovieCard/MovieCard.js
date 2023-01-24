import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel/Carousel';
import './moviecard.scss';


const MovieCard = () => {
    const [topRatedData, setTopRatedData] = useState([]);
    const [nowPlayingData, setNowPlayingData] = useState([]);
    const [popularMovieData, setPopularMovieData] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const topRatedPromise = fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=29cefd17c4da82be124b99d144d6d4d7')
                .then(response => response.json());

            const nowPlayingPromise = fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=29cefd17c4da82be124b99d144d6d4d7')
                .then(response => response.json());

            const popularMoviePromise = fetch('https://api.themoviedb.org/3/movie/popular?api_key=29cefd17c4da82be124b99d144d6d4d7')
                .then(response => response.json());
                

            const [topRatedData, nowPlayingData , popularMovieData] = await Promise.all([topRatedPromise, nowPlayingPromise, popularMoviePromise]);

            setTopRatedData(topRatedData);
            setNowPlayingData(nowPlayingData);
            setPopularMovieData(popularMovieData);
        }

        fetchData();
    }, []);


    return (
        <div className='container-wrapper'>
            <div>
                <h2 className='category-title'>Top Rated Movies</h2>
                <Carousel data={topRatedData} />
            </div>
            <div>
                <h2 className='category-title'>Now Playing Movies</h2>
                <Carousel data={nowPlayingData} />
            </div>
            <div>
                <h2 className='category-title'>Popular Movies</h2>
                <Carousel data={popularMovieData} />
            </div>
        </div>
    );
};


export default MovieCard;