import React, { Component } from "react";
import "./App.css";
import { CuiButton, CuiLoadingButton } from "./build";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CuiLoadingButton variant="contained" themeEngine="semantic">
          Hello Click
        </CuiLoadingButton>
      </div>
    );
  }
}

export default App;
