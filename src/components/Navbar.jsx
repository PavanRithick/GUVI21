import React from 'react';
import './Navbar.css';

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="navbar">
      <h1>Start Bootstrap</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
      <div className="cart" onClick={onCartClick}>
        <i className="fas fa-shopping-cart"></i> Cart ({cartCount})
      </div>
    </nav>
  );
};

export default Navbar;
