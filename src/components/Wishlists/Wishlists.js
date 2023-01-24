import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { WishlistContext } from './../WishlistContext';

const WishList = () => {
  const { wishlist , setWishlist } = useContext(WishlistContext)

  const handleRemoveFromWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  }
  return (
    <div className='container-wrapper wishlists'>
      { wishlist.length > 0 ?
      wishlist && wishlist.map((movie, index) => (
        <div className="flex-container">
          <Link key={movie.id} to={`/movie/${movie.id}`}>
          <div className="img-wrapper">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          </div>

          
        </Link>

<button className="remove-btn" onClick={() => handleRemoveFromWishlist(index)}>Remove From Wishlist</button>
        </div>
      )) : <div className="empty">Your wishlist is empty</div> }

    
    </div>
  );
}
export default WishList