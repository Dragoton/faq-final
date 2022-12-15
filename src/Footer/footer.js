import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="about">
          <h2>COMPANY</h2>
          <div className="footer-topics">
            <div>Contact</div>
            <div>Support</div>
            <div>About us</div>
          </div>
        </div>
        <div className="services">
          <h2>COMPANY</h2>
          <div className="footer-topics">
            <div>Wheel change</div>
            <div>Buy tires</div>
            <div>Rent tires</div>
          </div>
        </div>
        <div className="info">
          <h2>COMPANY</h2>
          <div className="footer-topics">
            <div>How fast</div>
            <div>Where</div>
            <div>Why</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
