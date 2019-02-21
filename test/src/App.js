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
  CuiLoadingButton,
  CuiGrid,
  CuiRow,
  CuiCol,
  CuiTransactionButton,
  CuiTooltip,
  CuiUploadButton,
  CuiInput,
  CuiTabs,
  CuiChips,
  CuiProgressBar,
  CuiAvatar
} from "react-frontend-library";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import "./App.css";

import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";

class App extends Component {
  render() {
    return (
      <div>
        <CuiAvatar themeEngine="tim">AG</CuiAvatar>
        <CuiProgressBar variant="determinate" color="primary" value={30} />
        <CuiChips label="aayush" />
        <CuiTabs
          plainTabs
          headerColor="primary"
          tabs={[
            {
              tabName: "Profile",
              tabIcon: Face,
              tabContent: (
                <p>
                  I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So
                  when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the
                  leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
                </p>
              )
            },
            {
              tabName: "Messages",
              tabIcon: Chat,
              tabContent: (
                <p>
                  I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I
                  will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am
                  the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could
                  be at.
                </p>
              )
            },
            {
              tabName: "Settings",
              tabIcon: Build,
              tabContent: (
                <p>
                  think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when
                  you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader
                  of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.
                </p>
              )
            }
          ]}
        />
        {/* <CuiGrid>
          <CuiRow>Hello</CuiRow>
        </CuiGrid> */}
        <CuiTooltip id="tooltip-top" title="Tooltip on top" placement="bottom">
          <CuiButton themeEngine="tim" size="large" themeColor="primary">
            Hello
          </CuiButton>
        </CuiTooltip>
        <CuiUploadButton>Upload</CuiUploadButton>
        <CuiInput
          labelText="With floating label"
          id="float"
          formControlProps={{
            fullWidth: true
          }}
        />
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
            <a href="https://creativetimofficial.github.io/material-kit-react/#/documentation" target="_blank" rel="noopener noreferrer">
              Documentation
            </a>
          ]}
        />
        <CuiCard>
          <CuiBadge themeEngine="tim">Test</CuiBadge>
        </CuiCard>
        <CuiMaterialBadge>Hi</CuiMaterialBadge>
        <CuiBadge>Hello</CuiBadge>
        <CuiLoadingButton loading themeEngine="vault" themeColor="vault" round>
          Hello
        </CuiLoadingButton>
        <CuiTransactionButton transaction loading themeEngine="vault" themeColor="vault" round>
          Transaction
        </CuiTransactionButton>
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
