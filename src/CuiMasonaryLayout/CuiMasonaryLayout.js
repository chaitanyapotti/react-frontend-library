import React from "react";
import PropTypes from "prop-types";

const CuiMasonaryLayout = props => {
  const columnWrapper = {};
  const result = [];
  const { columns, children, gap } = props;

  // create columns
  for (let i = 0; i < columns; i += 1) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < children.length; i += 1) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${gap}px` }} key={i}>
        {children[i]}
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < columns; i += 1) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1
        }}
        key={i}>
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return <div style={{ display: "flex" }}>{result}</div>;
};

CuiMasonaryLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(PropTypes.element)
};

CuiMasonaryLayout.defaultProps = {
  columns: 2,
  gap: 20
};

export default CuiMasonaryLayout;
