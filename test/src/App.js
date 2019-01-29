import React, { Component } from "react";
import "./App.css";
import { CuiButton } from "react-frontend-library";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CuiButton variant="text" themeEngine="vault">
          Hello
        </CuiButton>
      </div>
    );
  }
}

export default App;
