import React from "react";
import NavBar from "./components/NavBar";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <NavBar/>
    );
  }
}

export default App;