import React from "react";
import { Col } from "react-flexbox-grid";
import PropTypes from "prop-types";

const CuiCol = props => <Col {...props}>{props.children}</Col>;

CuiCol.propTypes = {
  children: PropTypes.node.isRequired
};

export default CuiCol;
