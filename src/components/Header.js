import React from "react";
import "./Header.css";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="/icons/logo.png"
          alt="Kaffe Codes Logo"
          className="logo-img"
        />
      </div>
      <nav className="nav">
        <a href="#brands">Brands</a>
        <a href="#offers">Offers</a>
        <a href="#guide">Buying Guide</a>
        <a href="#gifts">Gifts</a>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search on Kaffe Codes"
            className="search"
          />
        </div>
        <div className="icons-container">
          <FaHeart className="nav-icon" />
          <FaShoppingCart className="nav-icon" />
        </div>
        <div className="auth">
          <button>Sign In</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
