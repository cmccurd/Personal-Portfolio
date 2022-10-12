import React from 'react';
import author from '../../dist/assets/images/DSC00145.JPG';

const AboutMe = () => {
  return (
    <div className="container-fluid" id="top">
      <div className="row py-5">
        <div className="col-lg px-5" >
          <div className="image" style={{backgroundImage: `url(${author})`}}></div>
        </div>
        <div className="col-lg pe-5">
          <h1>About Me</h1>
          <p>HELLO</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;