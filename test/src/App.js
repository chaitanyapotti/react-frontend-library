import React, { Component } from "react";
import {
  CuiCard,
  CuiTables,
  CuiDataGrid,
  CuiButton,
  CuiBadge,
  CuiDropdown,
  CuiPagination,
  CuiParallax,
  CuiMaterialBadge,
  CuiLoadingButton
} from "react-frontend-library";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <CuiPagination
          pages={[
            { text: 1 },
            { text: "..." },
            { text: 5 },
            { text: 6 },
            { active: true, text: 7 },
            { text: 8 },
            { text: 9 },
            { text: "..." },
            { text: 12 }
          ]}
        />
        <CuiDropdown
          noLiPadding
          buttonText="Components"
          dropdownList={[
            "hello",
            <a href="https://creativetimofficial.github.io/material-kit-react/#/documentation" target="_blank">
              Documentation
            </a>
          ]}
        />
        <CuiCard>
          <CuiBadge themeEngine="tim">Test</CuiBadge>
        </CuiCard>
        <CuiMaterialBadge>Hi</CuiMaterialBadge>
        <CuiBadge>Hello</CuiBadge>
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
        <CuiParallax image={"https://www.adorama.com/alc/wp-content/uploads/2018/11/shutterstock_100419445-825x465.jpg"} />
        <CuiCard chart>
          <CuiDataGrid
            columns={["ID", "Name", "Country", "City", "Salary"]}
            tableData={[
              ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
              ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
              ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
              ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
              ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
              ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
            ]}
          />
          <CuiButton themeEngine="tim" size="large" justIcon>
            <AddShoppingCartIcon />
          </CuiButton>
        </CuiCard>
      </div>
    );
  }
}

export default App;
