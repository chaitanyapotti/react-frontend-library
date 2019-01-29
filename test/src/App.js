import React, { Component } from "react";
import "./App.css";
import { CuiButton } from "react-frontend-library";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CuiButton themeEngine="vault" color="warning" round link>
          Hello
        </CuiButton>
      </div>
    );
  }
}

export default App;
