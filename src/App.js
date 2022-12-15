import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import Header from "./Header/header";
import SearchBar from "./Search/SearchBar";
import ListPage from "./ListPage/ListPage";
import Response from "./Response/response";
import Tire from "./img/oneIcon.svg";
import Time from "./img/twoIcon.svg";
import Duck from "./img/threeIcon.svg";
import Video from "./img/rubberDuckVideo.mp4";
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
      <div className="intro-box">
        <h2>What RubberDuck do?</h2>
        <div className="icon-big-box">
          <div className="icon-small-box">
            <img src={Tire} alt="Rubber duck logo" />
            <img src={Time} alt="Rubber duck logo" />
            <img src={Duck} alt="Rubber duck logo" />
          </div>
        </div>
        <video
          className="video"
          controls
          disablePictureInPicture
          controlsList="nodownload"
          width="50%"
          height="50%"
          preload="auto"
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>

      <div className="info-box">
        <h3>You have a question?</h3>
        <p>Here you will find informations that interest you</p>
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
      </div>

      <ListPage searchResults={searchResults} />
      {/* {searchResults ? console.log(searchResults) : <></>} */}
      <Response />
      <Footer />
    </>
  );
}

export default App;
