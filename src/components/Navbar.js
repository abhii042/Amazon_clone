import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ user, cartCount, onLogout, onSearch, onCartClick }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(searchTerm, category);
  };

  return (
    <header>
      <div className="navbar">
        {/* Logo */}
        <div className="nav-logo border">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="Amazon Logo"
            />
          </div>
        </div>

        {/* Delivery Address */}
        <div className="nav-address border">
          <p className="add_1">Deliver to</p>
          <div className="icon">
            <i className="fa-solid fa-location-dot"></i>
            <p className="add_2">Ghaziabad 201009</p>
          </div>
        </div>

        {/* Search Bar */}
        <form className="nav-search" onSubmit={handleSearch}>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
            <option>Fashion</option>
            <option>Home</option>
            <option>Mobiles</option>
            <option>Appliances</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon.in"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

        {/* Sign In / Account */}
        <div className="nav-signin border" onClick={onLogout} title="Sign out">
          <p className="signin_1">Hello, {user?.name || 'Sign in'}</p>
          <p className="signin_2">Account & Lists ▾</p>
        </div>

        {/* Returns */}
        <div className="nav-returns border">
          <p className="returns_1">Returns</p>
          <p className="returns_2">& Orders</p>
        </div>

        {/* Cart */}
        <div className="nav-cart border" onClick={onCartClick}>
          <div className="cart-icon-wrap">
            <i id="icon" className="fa-solid fa-cart-shopping"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
          <p className="cart_1">Cart</p>
        </div>
      </div>

      {/* Secondary panel */}
      <div className="panel">
        <div className="menu_panel border">
          <i className="fa-solid fa-bars"></i> All
        </div>
        <div className="panel_items">
          {['Fresh', 'MX Player', 'Sell', 'Bestsellers', 'Mobiles', "Today's Deals"].map((item) => (
            <p key={item} className="border">{item}</p>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
