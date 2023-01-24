import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import { WishlistContext } from './../WishlistContext';
import './header.scss';

const Header = () => {
 
 const { wishlist,setWishlist } = useContext(WishlistContext);

  useEffect(() => {
      const storedWishlist = localStorage.getItem("wishlist");
      if (storedWishlist) {
        setWishlist(JSON.parse(storedWishlist));
      }
    }, []);
  

  
  return (

    <div className="header">
      <Link to={'/'}>
        <h2>Mytheresa Movie</h2>
      </Link>
      <Link to={'/wishlist'}>
        <p className="wishlist">WishList {wishlist.length > 0 ? ` ( ${wishlist.length})` : ''}</p>
      </Link>
    </div>
  );
}
export default Header