import React from 'react';

const SearchBar = ({ onSubmit }) => {
  // Логіка для компонента SearchBar
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );

  function handleSubmit(event) {
    event.preventDefault();
    const query = event.target.elements[0].value.trim();
    if (query) {
      onSubmit(query);
    }
  }
};

export default SearchBar;
