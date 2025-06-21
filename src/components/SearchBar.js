import React from 'react';

function SearchBar() {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Company name or job title"
      />
      <button>Find Companies</button>
      <p>
        <a href="#">Do you want to search for salaries?</a>
      </p>
    </div>
  );
}

export default SearchBar;
