import React from "react";
import MoreContent from "../components/MoreContent.jsx";
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
          <MoreContent
            key="Ari1"
            title="Browsing different products in the Image Gallery"
            des="This image gallery was made to display differnt types of products."
            img={Ari1}
            dis="Moving through products"
            long={false}
          />
          <MoreContent
            key="Ari2"
            title="Browsing the different varieties in the Image Gallery"
            des="This image gallery was made to display a products many varieties."
            img={Ari2}
            dis="Selecting different styles"
            long={false}
          />
          <MoreContent
            key="Ari3"
            title="The Image Magnifier"
            des="I created a magnifier that follows the users cursor so they could inspect items more closely."
            img={Ari3}
            dis="Using the image magnifier"
            long={false}
          />
          <MoreContent
            key="Ari4"
            title="Looking through past questions"
            des="The Q and A portion was to provided so users could recieve help on items they are interested in."
            img={Ari4}
            dis="Searching question and answers"
            long={false}
          />
        </div>
        <hr></hr>
        {/* Blue Ocean */}
        <div className="image-box-wrapper row justify-content-center">
          <h4 className="text-uppercase text-center py-5">Free Craigslist</h4>
          <MoreContent
            key="Blue1"
            title="Logging into the App"
            des="An authentication service was created to provide security for our users."
            img={Blue1}
            dis="Authenticating to app"
            long={true}
          />
          <MoreContent
            key="Blue2"
            title="Browsing the different items in the feed"
            des="This image gallery was made to display a products available."
            img={Blue2}
            dis="Scrolling application feed"
            long={true}
          />
          <MoreContent
            key="Blue3"
            title="Browsing items on the Map"
            des="The map has pins to display products available near your location, using the google maps api."
            img={Blue3}
            dis="Browsing listing on map"
            long={true}
          />
          <MoreContent
            key="Blue4"
            title="Browsing a listing"
            des="This view was created for listing and viewing listings."
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
          <MoreContent
            key="MVP1"
            title="Creating a new deck"
            des="This image shows the players new deck without any cards."
            img={MVP1}
            dis="Creating a new deck"
            long={false}
          />
          <MoreContent
            key="MVP2"
            title="Adding Cards"
            des="The user can use the search and the predictive search will help find the card they are looking for."
            img={MVP2}
            dis="Using predictive text to search cards"
            long={false}
          />
          <MoreContent
            key="MVP3"
            title="Seeing the cards in your deck"
            des="The image is set to default to your commander, but will automatically show the image of any card that is hovered from the card table."
            img={MVP3}
            dis="Adding new card"
            long={false}
          />
          <MoreContent
            key="MVP4"
            title="Importing cards"
            des="We have a modal that will import any number of cards that are entered into the text box."
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
