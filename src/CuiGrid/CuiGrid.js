import React from "react";
import { Grid } from "react-flexbox-grid";
import PropTypes from "prop-types";

const CuiGrid = props => {
  const { children, ...other } = props;
  return <Grid {...other}>{children}</Grid>;
};

CuiGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default CuiGrid;
