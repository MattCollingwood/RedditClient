import React, { useState, useEffect } from 'react';

import './Header.css';

import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redditSlice';

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <header>
      <div className="logo">
        <p>
          Reddit<span>Minimal</span>
        </p>
      </div>
      <form className="search" onSubmit={onSearchTermSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <button type="submit" onClick={onSearchTermSubmit} aria-label="Search">
        </button>
      </form>
    </header>
  );
};

export default Header;
