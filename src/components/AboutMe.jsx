import React from "react";
import author from "../assets/DSC00145.JPG";
import gitImg from "../assets/github-white-black-git.png";
import linkedin from "../assets/linkedin-logo-white.png";

const AboutMe = () => {
  return (
    <div className="container-fluid">
      <div className="row pt-5">
        <div className="col-lg">
          <div className="photo-wrapper mb-3">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg px-5">
          <h1 className="about-heading">About Me</h1>
          <p>
            Hi, I'm Cameron McCurdy and I’m passionate about the tech industry
            because at my core I’ve always enjoyed making systems more efficient
            and the design-build process. I am always continuing to learn new
            things and solve bigger problems. My success comes from being a
            great listener and a natural self-starter. I'm looking for a role
            that will allow me to continue to grow as a developer. If you are
            interested in an employee with a positive attitude, great work
            ethic, and a desire to be contributing member of your team contact
            me!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg mb-3">
          <a onClick={() => window.open("https://github.com/cmccurd")}>
            <img alt="gitHub" src={gitImg} height="90rem" />
          </a>
        </div>
        <div className="col-lg px-5 pt-3">
          <a onClick={() => window.open("https://www.linkedin.com/in/cmccurd")}>
            <img alt="linkedin" src={linkedin} height="50rem" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
