import React, { useState, useEffect } from "react";
import './header.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);
  return (

    <div className="header">
      <Link to={'/'}>
        <h2>Movie Flix</h2>
      </Link>
      <p className="wishlist">WishList</p>
    </div>
  );
}
export default Header