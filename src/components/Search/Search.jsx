import React, { useState } from 'react';
import fetchData from './utillity';

function Search() {
  const [searchTerm, setSearchTerm] = useState('programming');
  const [results, setResults] = useState([]);

  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value.trim() === '') {
      setResults([]);
      return;
    }
    fetchData(event.target.value.trim(), setResults);
  };

  return (
    <div>
      search
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Type your search term"
        data-testid="searchterm1"
      />
      <ul>
        {results.map((result) => (
          <li>
            <a href={result.url} data-testid="suggestion">
              {result.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
