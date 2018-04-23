import React, { Component } from "react";
import Portfolio from "./components/Portfolio";
import "./App.css";
import "./style/global.css";
import "./style/globalSection.css";
//import '../style/global-media-queries.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Portfolio />
      </div>
    );
  }
}

export default App;
