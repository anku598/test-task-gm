import React from "react";
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './slider.scss';

const Carousel = ({ data }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
  };

  if (!data) return null;
  return (
    <Slider {...settings}>
      {data.results && data.results.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="img-wrapper">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;