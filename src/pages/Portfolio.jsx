import React from "react";
import MoreContent from "../components/MoreContent.jsx";
import Ari1 from "../assets/Ari1.gif";
import Ari2 from "../assets/Ari2.gif";
import Ari3 from "../assets/Ari3.gif";
import Ari4 from "../assets/Ari4.gif";
import Blue1 from "../assets/Blue1.gif";
import Blue2 from "../assets/Blue2.gif";
import Blue3 from "../assets/Blue3.gif";
import Blue4 from "../assets/Blue4.gif";
import MVP1 from "../assets/MVP1.png";
import MVP2 from "../assets/MVP2.png";
import MVP3 from "../assets/MVP3.png";
import MVP4 from "../assets/MVP4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <>
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
              link="https://github.com/Ari-Design/Modern-Shopping-Site"
              des="This image gallery was made to display differnt types of products."
              img={Ari1}
              dis="Moving through products"
              long={false}
            />
            <MoreContent
              key="Ari2"
              title="Browsing the different varieties in the Image Gallery"
              link="https://github.com/Ari-Design/Modern-Shopping-Site"
              des="This image gallery was made to display a products many varieties."
              img={Ari2}
              dis="Selecting different styles"
              long={false}
            />
            <MoreContent
              key="Ari3"
              title="The Image Magnifier"
              link="https://github.com/Ari-Design/Modern-Shopping-Site"
              des="I created a magnifier that follows the users cursor so they could inspect items more closely."
              img={Ari3}
              dis="Using the image magnifier"
              long={false}
            />
            <MoreContent
              key="Ari4"
              title="Looking through past questions"
              link="https://github.com/Ari-Design/Modern-Shopping-Site"
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
              link="https://github.com/Team-Osiris-HR/BlueOcean"
              des="An authentication service was created to provide security for our users."
              img={Blue1}
              dis="Authenticating to app"
              long={true}
            />
            <MoreContent
              key="Blue2"
              title="Browsing the different items in the feed"
              link="https://github.com/Team-Osiris-HR/BlueOcean"
              des="This image gallery was made to display a products available."
              img={Blue2}
              dis="Scrolling application feed"
              long={true}
            />
            <MoreContent
              key="Blue3"
              title="Browsing items on the Map"
              link="https://github.com/Team-Osiris-HR/BlueOcean"
              des="The map has pins to display products available near your location, using the google maps api."
              img={Blue3}
              dis="Browsing listing on map"
              long={true}
            />
            <MoreContent
              key="Blue4"
              title="Browsing a listing"
              link="https://github.com/Team-Osiris-HR/BlueOcean"
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
              link="https://github.com/cmccurd/BuildBetter"
              des="This image shows the players new deck without any cards."
              img={MVP1}
              dis="Creating a new deck"
              long={false}
            />
            <MoreContent
              key="MVP2"
              title="Adding Cards"
              link="https://github.com/cmccurd/BuildBetter"
              des="The user can use the search and the predictive search will help find the card they are looking for."
              img={MVP2}
              dis="Using predictive text to search cards"
              long={false}
            />
            <MoreContent
              key="MVP3"
              title="Seeing the cards in your deck"
              link="https://github.com/cmccurd/BuildBetter"
              des="The image is set to default to your commander, but will automatically show the image of any card that is hovered from the card table."
              img={MVP3}
              dis="Adding new card"
              long={false}
            />
            <MoreContent
              key="MVP4"
              title="Importing cards"
              link="https://github.com/cmccurd/BuildBetter"
              des="We have a modal that will import any number of cards that are entered into the text box."
              img={MVP4}
              dis="Importing a list of cards"
              long={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
