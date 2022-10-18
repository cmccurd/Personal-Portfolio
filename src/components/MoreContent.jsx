import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const MoreContent = (props) => {
  const {dis, img, long} = props;
  return (
    <Popup
      trigger={long ? <div className="portfolio-image-box col-lg">
      <img
        className="portfolio-image"
        src={img}
        alt={dis}
      />
      <div className="overflow" id="long-overflow"></div>
      <FontAwesomeIcon
        className="portfolio-icon"
        id="long-icon"
        icon={faSearchPlus}
      />
    </div> :
        <div className="portfolio-image-box col-lg">
          <img
            className="portfolio-image"
            src={img}
            alt={dis}
          />
          <div className="overflow" ></div>
          <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
        </div>
      }
      modal
    >
      <img
        className="portfolio-image-popupbox"
        src={img}
        alt={dis}
      />
      <p className="description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo
        est expedita quos adipisci suscipit unde itaque qui perferendis.
      </p>
      <b>GitHub:</b>{" "}
      <a
        className="hyper-link"
        onClick={() =>
          window.open("https://github.com/Ari-Design/Modern-Shopping-Site")
        }
      >
        https://github.com/Ari-Design/Modern-Shopping-Site
      </a>
    </Popup>
  );
};

export default MoreContent;
