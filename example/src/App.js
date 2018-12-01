import React, { Component } from "react";

import ExampleComponent from "lightning";
import logo from "./logo.png";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <ExampleComponent text="SUPER" />
          </p>
        </header>
      </div>
    );
  }
}
