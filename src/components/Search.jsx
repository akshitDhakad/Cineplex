import { useState } from "react";
import { Link } from "react-router-dom";


function Search() {
  const [searchValue, setSearchValue] = useState("");


  function handleSearch(e) {
    e.preventDefault();
    console.log(searchValue);
 
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="search">
      <form onSubmit={handleSearch} className="searchbtn">
        <input
          name="name"
          placeholder="search movies and series ...."
          value={searchValue}
          onChange={handleChange}
        />
        <button type="submit"><Link to={`./search?name=${searchValue}`}>search</Link></button>
      </form>
    </div>
  );
}

export default Search;
