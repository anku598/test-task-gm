import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { WishlistContext } from './../WishlistContext';

const WishList = () => {
  const { wishlist } = useContext(WishlistContext)
  return (
    <div className='container-wrapper wishlists'>
      {wishlist && wishlist.map((movie) => (
        <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="img-wrapper">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>
        </Link>
      ))}
    </div>
  );
}
export default WishList