import React, { Component } from "react";
import "./App.css";
import { CuiButton, CuiLoadingButton } from "./build";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CuiButton variant="text" size="medium" themeEngine="vault">
          Hello
        </CuiButton>
      </div>
    );
  }
}

export default App;
