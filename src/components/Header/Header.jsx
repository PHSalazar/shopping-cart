import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CartButton from './CartButton/CartButton';

import './Header.css';

function Header() {
  return (
    <header className="header">

      <h2>LOGO</h2>

      <SearchBar />

      <CartButton />

    </header>

  );
}

export default Header;
