import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useParams } from 'react-router-dom';
import './moviedetails.scss'
import { WishlistContext } from './../WishlistContext';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const { wishlist, setWishlist } = useContext(WishlistContext);



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


  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);


  const handleAddToWishlist = (movie) => {
    const storedWishlist = localStorage.getItem("wishlist");
    const wishlistArray = storedWishlist ? JSON.parse(storedWishlist) : [];

    // Check if the movie is already in the wishlist
    const movieAlreadyAdded = wishlistArray.find(item => item.id === movie.id);
    if (movieAlreadyAdded) {
      toast.error("This movie is already in your wishlist", {
        position: "top-left",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    // Add movie to wishlist
    const updatedWishlist = [...wishlistArray, movie];
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    toast.success("Movie added to wishlist!", {
      position: "top-left",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className='details-brief'>
      <div className="column-left">
        <div className="img-wrapper">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </div>
      </div>
      <div className="column-right">
        <p className='title'> {movie.title}</p>
        <p className='release-date'>Release Date : {movie.release_date}</p>
        <div className='genre-lists' >
          <h3>Genere:</h3> {movie.genres && movie.genres.map((genre) => (
            <p className='list-item' key={genre.id}>{genre.name}</p>
          ))}
        </div>
        <p className='overview'>{movie.overview}</p>
        <button className='w-btn' onClick={() => handleAddToWishlist(movie)}>Add to wishlist</button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default MovieDetails