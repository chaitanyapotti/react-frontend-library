import React from "react";
import { Grid } from "react-flexbox-grid";
import PropTypes from "prop-types";

const CuiGrid = props => <Grid {...props}>{props.children}</Grid>;

CuiGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export default CuiGrid;
