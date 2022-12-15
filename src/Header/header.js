import Logo from "../img/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <div className="header-app">
      <div className="logo-box">
        <img src={Logo} alt="Rubber duck logo" />{" "}
        <span className="line">
          <p>|</p>
        </span>
        <span className="helpcenter">
          <p>help center</p>
        </span>
      </div>
      <div className="login-box">
        <button className="login-button">log in</button>
      </div>
    </div>
  );
};

export default Header;
