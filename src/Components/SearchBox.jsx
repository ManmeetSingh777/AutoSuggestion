import React, { useState } from 'react';
import countryData from '../Resources/CountryData.json'; 
import './SearchBox.css'



function SearchBox() {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text.trim() !== '') {
      const filteredSuggestions = countryData.filter(country =>
        country.name.toLowerCase().startsWith(text.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      console.log('Escape');
      setSuggestions([]);
    }
  };    

  

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="search-input"
      />
    <button>Search</button>
      {suggestions.length > 0 && (
        <ul className="search-suggestions">
          {suggestions.map((country, index) => (
            <li key={index}>{country.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBox;   