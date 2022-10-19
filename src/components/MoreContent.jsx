import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const MoreContent = (props) => {
  const {dis, img, long, title, des, link} = props;
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
      <h4>{title}</h4>
      <img
        className="portfolio-image-popupbox"
        src={img}
        alt={dis}
      />
      <p className="description">{des}
      </p>
      <b>GitHub:</b>{" "}
      <a
        className="hyper-link"
        onClick={() =>
          window.open(link)
        }
      >
        {link}
      </a>
    </Popup>
  );
};

export default MoreContent;
