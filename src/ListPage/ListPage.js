import Post from "../Post/Post";
import "./listpage.css";
import { useState } from "react";

const ListPage = ({ searchResults }) => {
  const [categorySelected, setCategorySelected] = useState("All");
  const results = searchResults
    .slice(0, 6)
    .map((post) => (
      <Post key={post.id} post={post} categorySelected={categorySelected} />
    ));

  function SelectedCategory(value) {
    // console.log(value);
    setCategorySelected(value);
  }

  const content = results?.length ? (
    <>
      <div className="FAQ-container">
        <div className="category-box">
          <div>Category:</div>
          <div
            id={"All"}
            onClick={(event) => SelectedCategory(event.target.id)}
          >
            All
          </div>
          <div
            id={"Tires"}
            onClick={(event) => SelectedCategory(event.target.id)}
          >
            Tires
          </div>
          <div
            id={"Wires"}
            onClick={(event) => SelectedCategory(event.target.id)}
          >
            Wires
          </div>
          <div
            id={"Pick"}
            onClick={(event) => SelectedCategory(event.target.id)}
          >
            Pick
          </div>
          <div
            id={"Location"}
            onClick={(event) => SelectedCategory(event.target.id)}
          >
            Location
          </div>
        </div>
        <div className="results-container">{results}</div>
      </div>
    </>
  ) : (
    <article>
      <p>No posts match</p>
    </article>
  );

  console.log(content);

  return <div className="content">{content}</div>;
};

export default ListPage;
