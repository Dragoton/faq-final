import Tire from "../img/oneIcon.svg";
import Time from "../img/twoIcon.svg";
import Duck from "../img/threeIcon.svg";
import Video from "../img/rubberDuckVideo.mp4";
import "./intro.css";

const Intro = () => {
  return (
    <>
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
    </>
  );
};

export default Intro;
