import React from "react";
import { Col } from "react-flexbox-grid";
import PropTypes from "prop-types";

const CuiCol = props => {
  const { children, ...other } = props;
  return <Col {...other}>{children}</Col>;
};

CuiCol.propTypes = {
  children: PropTypes.node.isRequired
};

export default CuiCol;
