import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { withStyles, Button } from "@material-ui/core";

import styles from "../styles/Pagination";

function CuiPagination({ ...props }) {
  const { classes, pages, themeColor } = props;
  return (
    <ul className={classes.pagination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [classes.paginationLink]: true,
          [classes[themeColor]]: prop.active,
          [classes.disabled]: prop.disabled
        });
        return (
          <li className={classes.paginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button onClick={() => console.log("you've clicked " + prop.text)} className={paginationLink}>
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

CuiPagination.defaultProps = {
  themeColor: "primary"
};

CuiPagination.propTypes = {
  classes: PropTypes.object.isRequired,
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(["PREV", "NEXT", "..."])]).isRequired,
      onClick: PropTypes.func
    })
  ).isRequired,
  themeColor: PropTypes.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "transparent"])
};

export default withStyles(styles)(CuiPagination);
