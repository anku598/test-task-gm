import React, { useContext } from "react";
import './header.scss'
import { Link } from 'react-router-dom';
import { WishlistContext } from './../WishlistContext';

const Header = () => {
  const { wishlist } = useContext(WishlistContext)
  return (

    <div className="header">
      <Link to={'/'}>
        <h2>Movie Flix</h2>
      </Link>
      <Link to={'/wishlist'}>
        <p className="wishlist">WishList ({wishlist.length})</p>
      </Link>
    </div>
  );
}
export default Header