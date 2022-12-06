import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import SearchBar from "./Search/SearchBar";
import ListPage from "./ListPage/ListPage";
import Response from "./Response/response";
import Logo from "./img/logo.svg";
import Tire from "./img/oneIcon.svg";
import Time from "./img/twoIcon.svg";
import Duck from "./img/threeIcon.svg";
import Video from "./img/rubberDuckVideo.mp4";
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
      <div className="header-app">
        <div className="logo-box">
          <img src={Logo} alt="Rubber duck logo" />{" "}
          <span>
            <p>|</p>
          </span>
          <span className="helpcenter">
            <p>help center</p>
          </span>
        </div>
        <div className="login-box">
          <span>
            <p>en | dk</p>
          </span>
          <button className="login-button">log in</button>
        </div>
      </div>
      <div className="intro-box">
        <h2>What do we do?</h2>
        <div className="icon-big-box">
          <div className="icon-small-box">
            <img src={Tire} alt="Rubber duck logo" />
            <p>you choose the tires</p>
          </div>
          <div className="icon-small-box">
            <img src={Time} alt="Rubber duck logo" />
            <p>place and time</p>
          </div>
          <div className="icon-small-box">
            <img src={Duck} alt="Rubber duck logo" />
            <p>we do the rest</p>
          </div>
        </div>
        <video
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
        <h3>How can we help?</h3>
        <p>Here you will find informations that interest you</p>
        <SearchBar posts={posts} setSearchResults={setSearchResults} />
      </div>

      <ListPage searchResults={searchResults} />
      {/* {searchResults ? console.log(searchResults) : <></>} */}
      <Response />
    </>
  );
}

export default App;
