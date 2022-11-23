import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./index.css";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(posts);

    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value) ||
        post.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };

  return (
    <header>
      <div className="search-box">
        <div className="searchicon">
          <BiSearchAlt2 />
        </div>
        <form className="search" onSubmit={handleSubmit}>
          <input
            className="search-input"
            placeholder="Search for help"
            type="text"
            id="search"
            onChange={handleSearchChange}
          />
        </form>
      </div>
    </header>
  );
};

export default SearchBar;
