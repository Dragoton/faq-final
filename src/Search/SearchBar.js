import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import "./searchbar.css";

const SearchBar = ({ posts, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    if (!e.target.value) return setSearchResults(posts);

    // console.log(posts);
    const resultsArray = posts.filter(
      (post) =>
        post.title.includes(e.target.value.toLowerCase()) ||
        post.title.includes(e.target.value.toUpperCase()) ||
        post.title.includes(
          e.target.value.charAt(0).toUpperCase() +
            e.target.value.slice(1).toLowerCase()
        ) ||
        post.body.includes(e.target.value.toLowerCase()) ||
        post.body.includes(e.target.value.toUpperCase()) ||
        post.body.includes(
          e.target.value.charAt(0).toUpperCase() +
            e.target.value.slice(1).toLowerCase()
        )
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
