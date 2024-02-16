import { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  function handleSearch(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="search ">
      <form onSubmit={handleSearch} className="searchbtn border">
        <input
          name="name"
          placeholder="Search Your Favourite Movies and Web Series..."
          value={searchValue}
          className="text-center"
          onChange={handleChange}
        />
        <button type="submit">
          <Link to={`./search?name=${searchValue}`} className="tracking-wide">
            search
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Search;
