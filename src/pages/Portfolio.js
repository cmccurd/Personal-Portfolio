import React from "react";
import MoreContent from "../components/MoreContent.jsx"
import Ari1 from "../../dist/assets/images/Ari1.gif";
import Ari2 from "../../dist/assets/images/Ari2.gif";
import Ari3 from "../../dist/assets/images/Ari3.gif";
import Ari4 from "../../dist/assets/images/Ari4.gif";
import Blue1 from "../../dist/assets/images/Blue1.gif";
import Blue2 from "../../dist/assets/images/Blue2.gif";
import Blue3 from "../../dist/assets/images/Blue3.gif";
import Blue4 from "../../dist/assets/images/Blue4.gif";
import MVP1 from "../../dist/assets/images/MVP1.png";
import MVP2 from "../../dist/assets/images/MVP2.png";
import MVP3 from "../../dist/assets/images/MVP3.png";
import MVP4 from "../../dist/assets/images/MVP4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">Portfolio</h1>
        {/* Ari */}
        <div className="image-box-wrapper row justify-content-center">
          <h4 className="text-uppercase text-center py-5">
            Product page for modern online shopping
          </h4>
          <MoreContent key='Ari1'
            img={Ari1}
            dis="Moving through products"
            long={false}
          />
          <MoreContent key='Ari2'
            img={Ari2}
            dis="Selecting different styles"
            long={false}
          />
          <MoreContent key='Ari3'
            img={Ari3}
            dis="Using the image magnifier"
            long={false}
          />
          <MoreContent key='Ari4'
            img={Ari4}
            dis="Searching question and answers"
            long={false}
          />
        </div>
        <hr></hr>
        {/* Blue Ocean */}
        <div className="image-box-wrapper row justify-content-center">
          <h4 className="text-uppercase text-center py-5">Free Craigslist</h4>
          <MoreContent key='Blue1'
            img={Blue1}
            dis="Authenticating to app"
            long={true}
          />
          <MoreContent key='Blue2'
            img={Blue2}
            dis="Scrolling application feed"
            long={true}
          />
          <MoreContent key='Blue3'
            img={Blue3}
            dis="Authenticating to app"
            long={true}
          />
          <MoreContent key='Blue4'
            img={Blue4}
            dis="A donation page"
            long={true}
          />
        </div>
        <hr></hr>
        {/* MVP */}
        <div className="image-box-wrapper row justify-content-center">
          <h4 className="text-uppercase text-center py-5">
            Magic The Gathering Deckbuilder App
          </h4>
          <MoreContent key='MVP1'
            img={MVP1}
            dis="Creating a new deck"
            long={false}
          />
          <MoreContent key='MVP2'
            img={MVP2}
            dis="Using predictive text to search cards"
            long={false}
          />
          <MoreContent key='MVP3'
            img={MVP3}
            dis="Adding new card"
            long={false}
          />
          <MoreContent key='MVP4'
            img={MVP4}
            dis="Importing a list of cards"
            long={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
