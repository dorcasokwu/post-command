import React from "react";
import "./PortfoliNavbar.css";
import Okwu from "../../assets/images/photowork3.png";
const PortfoliNavbar = () => {
  return (
    <div className="PORTFOLIOPADIV">
      <div className="displayport">
        <div className="portfoliod">
          <h2 className="portfoliosection">portfolio section</h2>
          <br />
          <p className="portfoliotext">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            consectetur distinctio labore doloribus blanditiis assumenda illum,
            temporibus ducimus earum ipsam molestias fugit enim eum mollitia
            atque neque at cum dolorem.
          </p>
          <div className="READ">READ MORE</div>
        </div>
        <div className="image2div">
          <img src={Okwu} alt="markbook" className="imagey" />
        </div>
      </div>
    </div>
  );
};

export default PortfoliNavbar;
