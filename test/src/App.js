import React, { Component } from "react";
import "./App.css";
import { CuiButton } from "react-frontend_library";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CuiButton variant="contained" themeEngine="semantic">
          Hello Click
        </CuiButton>
      </div>
    );
  }
}

export default App;
