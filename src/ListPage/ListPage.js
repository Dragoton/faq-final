import Post from "../Post/Post";
import "./listpage.css";
import { useState } from "react";

const ListPage = ({ searchResults }) => {
  const [categorySelected, setCategorySelected] = useState("All");
  const results = searchResults.map((post) => (
    <Post key={post.id} post={post} categorySelected={categorySelected} />
  ));

  function SelectedCategory(value) {
    setCategorySelected(value);
  }

  const content = results?.length ? (
    <>
      <div className="FAQ-container">
        <div className="category-box">
          <div id="category-div">category:</div>
          <div
            id={"All"}
            onClick={(event) => {
              SelectedCategory(event.target.id);
            }}
            className={categorySelected === "All" ? "focused" : ""}
          >
            All
          </div>
          <div
            id={"change"}
            onClick={(event) => {
              SelectedCategory(event.target.id);
            }}
            className={categorySelected === "change" ? "focused" : ""}
          >
            Tire change
          </div>
          <div
            id={"buy"}
            onClick={(event) => SelectedCategory(event.target.id)}
            className={categorySelected === "buy" ? "focused" : ""}
          >
            Buy tires
          </div>
          <div
            id={"rent"}
            onClick={(event) => SelectedCategory(event.target.id)}
            className={categorySelected === "rent" ? "focused" : ""}
          >
            Rent tires
          </div>
          <div
            id={"patch"}
            onClick={(event) => SelectedCategory(event.target.id)}
            className={categorySelected === "patch" ? "focused" : ""}
          >
            Patching
          </div>
        </div>
        <div className="results-container">{results}</div>
      </div>
    </>
  ) : (
    <article className="no-posts">
      <p>No posts match</p>
    </article>
  );

  console.log(content);

  return <div className="content">{content}</div>;
};

export default ListPage;
