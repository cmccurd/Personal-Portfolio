import React from 'react';
import { Link } from "react-router-dom";

export default function Footer () {

  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>For the use of Cameron McCurdy</p>
            </div>
            <div className="d-flex">
              <a href="tel:(317)772-2641">(317)772-2641</a>
            </div>
            <div className="d-flex">
              <p>cam.alex.mccurdy@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link className="footer-nav" to="/">Home</Link>
                <br />
                <Link className="footer-nav" to="/portfolio">Portfolio</Link>
                <br />
                <Link className="footer-nav" to="/contact">Contact Me</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}