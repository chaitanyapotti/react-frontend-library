import React from "react";
import { Row } from "react-flexbox-grid";
import PropTypes from "prop-types";

const CuiRow = props => <Row {...props}>{props.children}</Row>;

CuiRow.propTypes = {
  children: PropTypes.node.isRequired
};

export default CuiRow;
