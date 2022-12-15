import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="about">
          <h2>ADDRESS</h2>
          <div className="footer-topics">
            <div>Jernholmen 5</div>
            <div>2650 Hvidovre</div>
          </div>
        </div>
        <div className="services">
          <h2>CONTACT</h2>
          <div className="footer-topics">
            <div>kontakt@rubberduck.dk</div>
            <div>+45 82 82 62 62</div>
          </div>
        </div>
        <div className="info">
          <h2>OPEN</h2>
          <div className="footer-topics">
            <div>Mon-Fri</div>
            <div>09.00 - 16.00</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
