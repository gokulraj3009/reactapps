import React from "react";
import Search from "./components/Search/Search";

function App() {
  return (
    <div >
      <Search />
    </div>
  );
}

export default App;

// import { useState, useEffect } from 'react';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('Programming');
//   const [searchResults, setSearchResults] = useState([]);

//   const debounce = (callback, delay) => {
//     let timeoutId;
//     return (...args) => {
//       if (timeoutId) {
//         clearTimeout(timeoutId);
//       }
//       timeoutId = setTimeout(() => {
//         callback(...args);
//       }, delay);
//     };
//   };

//   useEffect(() => {
//     const apiUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&origin=*&search=${searchTerm}`;
//     const search = async () => {
//       const response = await fetch(apiUrl);
//       const [, results] = await response.json();
//       const searchResults = results.map((title, index) => ({
//         title,
//         url: results[index + 1],
//       }));
//       setSearchResults(searchResults);
//     };
//     const debouncedSearch = debounce(search, 500);
//     if (searchTerm) {
//       debouncedSearch();
//     }
//   }, [searchTerm]);

//   return (
//     <div>
//       <h1>wiki search</h1>
//       <input
//         data-testid="searchterm"
//         value={searchTerm}
//         onChange={(event) => setSearchTerm(event.target.value)}
//       />
//       {searchResults.length > 0 && (
//         <ul data-testid="suggestion">
//           {searchResults.map((result, index) => (
//             <li key={index}>
//               <a href={result.url}>{result.title}</a>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default App;