import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import Header from "./Header/header";
import Intro from "./Intro/intro";
import SearchBar from "./Search/SearchBar";
import ListPage from "./ListPage/ListPage";
import Response from "./Response/response";
import Footer from "./Footer/footer";
import "./app.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  // const [clickedItem, setClickedItem] = useState()

  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <div className="info-box">
        <h3>You have a question?</h3>
        <p>Here you will find informations that interest you</p>
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
      </div>
      <ListPage searchResults={searchResults} />
      <Response />
      <Footer />
    </>
  );
}

export default App;
