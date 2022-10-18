import React from "react";
import Ari1 from "../dist/assets/images/Ari1.gif";
import Ari2 from "../dist/assets/images/Ari2.gif";
import Ari3 from "../dist/assets/images/Ari3.gif";
import Ari4 from "../dist/assets/images/Ari4.gif";
import Blue1 from "../dist/assets/images/Blue1.gif";
import Blue2 from "../dist/assets/images/Blue2.gif";
import Blue3 from "../dist/assets/images/Blue3.gif";
import Blue4 from "../dist/assets/images/Blue4.gif";
import MVP1 from "../dist/assets/images/MVP1.png";
import MVP2 from "../dist/assets/images/MVP2.png";
import MVP3 from "../dist/assets/images/MVP3.png";
import MVP4 from "../dist/assets/images/MVP4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

class Portfolio extends React.Component {
// // Netflix
// const openPopupboxAri1 = () => {
//   const content = (
//     <>
//       <img className="portfolio-image-popupbox" src={Ari1} alt="Moving through products" />
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
//       <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/Ari-Design/Modern-Shopping-Site")}>https://github.com/Ari-Design/Modern-Shopping-Site</a>
//     </>
//   )
//   PopupboxManager.open({ content })
// }

// const popupboxConfigAri1 = {
//   titleBar: {
//     enable: true,
//     text: "Moving through products"
//   },
//   fadeIn: true,
//   fadeInSpeed: 500
// }


  render() {
    return (
      <div className="portfolio-wrapper">
        <div className="container">
          <h1 className="text-uppercase text-center py-5">Portfolio</h1>
          {/* Ari */}
          <div className="image-box-wrapper row justify-content-center">
            <h4 className="text-uppercase text-center py-5">Product page for modern online shopping</h4>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Ari1} alt="Moving through products" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Ari2} alt="Selecting different styles" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Ari3} alt="Using the image magnifier" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Ari4} alt="Searching question and answers" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
          <hr></hr>
          {/* Blue Ocean */}
          <div className="image-box-wrapper row justify-content-center">
          <h4 className="text-uppercase text-center py-5">Free Craigslist</h4>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Blue1} alt="Authenticating to app" />
              <div className="overflow" id="long-overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" id="long-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Blue2} alt="Scrolling application feed" />
              <div className="overflow" id="long-overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" id="long-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Blue3} alt="Looking for donations on map" />
              <div className="overflow" id="long-overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" id="long-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={Blue4} alt="A donation page" />
              <div className="overflow" id="long-overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" id="long-icon" icon={faSearchPlus} />
            </div>
          </div>
          <hr></hr>
          {/* MVP */}
          <div className="image-box-wrapper row justify-content-center">
          <h4 className="text-uppercase text-center py-5">Magic The Gathering Deckbuilder App</h4>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={MVP1} alt="Creating a new deck" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={MVP2} alt="Using predictive text to search cards" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={MVP3} alt="Adding new card" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
            <div className="portfolio-image-box col-lg">
              <img className="portfolio-image" src={MVP4} alt="Importing a list of cards" />
              <div className="overflow"></div>
              <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
