import React from "react";
import NavBar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Particle from "./components/Particle.jsx";
import AboutMe from "./components/AboutMe.jsx";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <NavBar />
        <Header />
      </>
    );
  }
}

export default App;
