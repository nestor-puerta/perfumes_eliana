import React from 'react';
import Nav from './nav';
import SearchBar from './searchbar';
import './header.css';

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-left">
        <h1>Perfumes Elegantes</h1>
      </div>

      <div className="header-center">
        <SearchBar />
      </div>

      <div className="header-right">
        <Nav />
      </div>
    </header>
  );
};

export default Header;