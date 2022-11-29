import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ListPage from "./ListPage";
import Logo from "./img/logo.svg";
import Video from "./img/rubberDuckVideo.mp4";
import "./app.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

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
        <video width="50%" height="50%" preload="auto">
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
      <div className="didyoufound">
        <div className="found-title">
          <h3>Did you find what you were looking for?</h3>
        </div>
        <div className="buttons">
          <button>YES</button>
          <button>NO</button>
        </div>
      </div>
    </>
  );
}

export default App;
