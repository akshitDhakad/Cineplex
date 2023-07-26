import React, {useState} from 'react';
import {Link} from "react-router-dom"
// import SearchPage from './SearchPage';


function Search() {
  const [name, setName] = useState('');

  return (
    <div className='search'>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        id='searchBtn'
        placeholder='search movie and series'
      />
      <Link  to={`/search/movie?query=${encodeURIComponent(name)}`} className='searchBtn' htmlFor='searchBtn'>
        Search
      </Link>
 
    </div>
  );
}

export default Search;
