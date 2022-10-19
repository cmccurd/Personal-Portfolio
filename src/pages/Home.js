import React from "react";
import { Link } from "react-router-dom";
import Background from "../../dist/assets/images/Background.jpg";
import AboutMe from "../components/AboutMe.jsx";
import Particle from "../components/Particle.jsx";
import Typed from "typed.js";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Front-End: HTML, CSS, JavaScript",
        "Back-End: Java, Python, NodeJS, ExpressJS",
        "DBMS: MYSQL, Postgres, MongoDB",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 0,
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="header-wrapper"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Particle />
        <div className="main-info">
          <h1>Web, Software, and Phone Application Development!</h1>
          <span className="typed-text" ref={el}></span>
          <Link className="btn-contact-me" aria-current="page" to="/contact">
            Contact Me
          </Link>
          <AboutMe />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
