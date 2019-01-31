import React, { Component } from "react";
import "./App.css";
import { CuiButton, CuiLoadingButton, CuiCard, CuiTables } from "react-frontend-library";

class App extends Component {
  render() {
    return (
      <CuiCard themeEngine="tim">
        <CuiLoadingButton themeEngine="vault" color="vault" round>
          Hello
        </CuiLoadingButton>
        <CuiTables
          tableHeaderColor="primary"
          tableHead={["ID", "Name", "Country", "City", "Salary"]}
          tableData={[
            ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
            ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
            ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
            ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
            ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
            ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
          ]}
        />
      </CuiCard>
    );
  }
}

export default App;
