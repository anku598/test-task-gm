import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../components/slider.css'

const MovieCard = () => {
    const [topRatedData, setTopRatedData] = useState([]);
    const [nowPlayingData, setNowPlayingData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const topRatedPromise = fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=29cefd17c4da82be124b99d144d6d4d7')
                .then(response => response.json());

            const nowPlayingPromise = fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=29cefd17c4da82be124b99d144d6d4d7')
                .then(response => response.json());

            const [topRatedData, nowPlayingData] = await Promise.all([topRatedPromise, nowPlayingPromise]);

            setTopRatedData(topRatedData);
            setNowPlayingData(nowPlayingData);
        }

        fetchData();
    }, []);


    return (
        <div>
            <h1>Top Rated and Now Playing Movies</h1>
            <div>
                <h2>Top Rated Movies</h2>
                <TopRatedCarousel data={topRatedData} />

            </div>

            <div>
                <h2>Now Playing Movies</h2>
                <NowPlayingCarousel data={nowPlayingData} />

            </div>
        </div>
    );
};

const TopRatedCarousel = ({ data }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (!data) return null;
    return (
        <Slider {...settings}>
            {data.results && data.results.slice(0, 5).map((movie) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <div className="img-wrapper">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </Link>
            ))}
        </Slider>
    );
};

const NowPlayingCarousel = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {data.results && data.results.slice(0, 5).map((movie, index) => (
                <Link key={movie.id} to={`/movie/${movie.id}`}>
                    <div className="image-wrapper">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </div>
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </Link>
            ))}
        </Slider>
    );
};

export default MovieCard;