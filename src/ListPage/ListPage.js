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
            all
          </div>
          <div
            id={"Tires"}
            onClick={(event) => {
              SelectedCategory(event.target.id);
            }}
            className={categorySelected === "Tires" ? "focused" : ""}
          >
            tires
          </div>
          <div
            id={"Wires"}
            onClick={(event) => SelectedCategory(event.target.id)}
            className={categorySelected === "Wires" ? "focused" : ""}
          >
            wires
          </div>
          <div
            id={"Pick"}
            onClick={(event) => SelectedCategory(event.target.id)}
            className={categorySelected === "Pick" ? "focused" : ""}
          >
            pick
          </div>
          <div
            id={"Location"}
            onClick={(event) => SelectedCategory(event.target.id)}
            className={categorySelected === "Location" ? "focused" : ""}
          >
            location
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
