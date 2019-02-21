/* eslint camelcase: 0 */

import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class DataGrid extends Component {
  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiPaper: {
          elevation4: {
            border: "1.75px solid #EAEAEA",
            boxShadow: "none"
          }
        },
        MuiToolbar: {
          regular: {
            borderBottom: "1.75px solid #EAEAEA"
          }
        },
        MUIDataTableBodyCell: {
          root: {
            fontSize: "16px",
            fontWeight: "400",
            whiteSpace: "nowrap",
            "text-overflow": "ellipsis",
            overflow: "hidden"
          }
        },
        MUIDataTableHeadRow: {
          root: {
            "&:hover": {
              backgroundColor: "#ffffff !important",
              cursor: "initial !important"
            }
          }
        },
        MUIDataTableHeadCell: {
          root: {
            fontSize: "16px",
            fontFamily: "Montserrat"
          }
        },
        MUIDataTableFooterCell: {
          root: {
            fontSize: "16px",
            fontFamily: "Montserrat"
          }
        },
        MuiTypography: {
          root: {
            fontSize: "16px",
            fontFamily: "Montserrat"
          },
          caption: {
            fontSize: "1rem"
          }
        },
        MuiTableCell: {
          root: {
            padding: "0px",
            fontFamily: "Montserrat",
            "text-overflow": "ellipsis",
            overflow: "hidden"
          }
        },
        MuiTablePagination: {
          select: {
            fontSize: "14px",
            fontFamily: "Montserrat"
          }
        },
        MuiTooltip: {
          tooltip: {
            fontSize: "14px"
          }
        },
        MuiInputBase: {
          root: {
            fontSize: "16px"
          }
        },
        MuiTableRow: {
          root: {
            "&:hover": {
              cursor: "pointer",
              // boxShadow: "0px 10px 20px 0px rgba(76, 169, 252, 0.5)",
              backgroundColor: "rgba(76, 169, 252, 0.2) !important"
            }
          }
        }
      },
      typography: {
        useNextVariants: true
      }
    });

  render() {
    const { tableData, columns, history, filterList, onRowClick, filter, ...rest } = this.props || {};
    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: false,
      rowsPerPage: 15,
      viewColumns: false,
      filter,
      pagination: tableData.length > 15,
      filterList,
      print: false,
      onRowClick: onRowClick,
      ...rest
    };
    return (
      <MuiThemeProvider theme={this.getMuiTheme()}>
        <MUIDataTable data={tableData} columns={columns} options={options} />
      </MuiThemeProvider>
    );
  }
}

// DataGrid.propTypes = {
//   tableData: PropTypes.array,
//   columns: PropTypes.array,
//   onRowClick: PropTypes.function,
//   filter: PropTypes.bool
// };

export default DataGrid;
