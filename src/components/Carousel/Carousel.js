import React from "react";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import './slider.scss'

const Carousel = ({ data }) => {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        </Link>
      ))}
    </Slider>
  );
};

export default Carousel;