import React from 'react';
import '../styles/searchbar.css';
const Searchbar = () => {
  return (
    <form className="search-form">
      <button className="search-button" type="submit">
        <svg
          width="20"
          height="20"
          className="search-icon"
          viewBox="0 0 24 24"
          aria-hidden="false"
        >
          <path d="M16.5 15c.9-1.2 1.5-2.8 1.5-4.5C18 6.4 14.6 3 10.5 3S3 6.4 3 10.5 6.4 18 10.5 18c1.7 0 3.2-.5 4.5-1.5l4.6 4.5 1.4-1.5-4.5-4.5zm-6 1c-3 0-5.5-2.5-5.5-5.5S7.5 5 10.5 5 16 7.5 16 10.5 13.5 16 10.5 16z"></path>
        </svg>
      </button>
      <input
        className="search-input"
        type="search"
        placeholder="Search Events "
      />
    </form>
  );
};

export default Searchbar;
