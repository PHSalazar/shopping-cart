import React, {useState} from 'react';

import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';

function SearchBar() {
  
  const [searchValue, setSearchValue] = useState('ss');

  return (
    <form className="search-bar">
      <input type="search"
        value={searchValue}
        placeholder="Buscar Produto"
        className="search__input"
        onChange={ ({target}) => setSearchValue(target.value)}
        required
      />
      {searchValue}
      <button
        type="submit"
        className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
