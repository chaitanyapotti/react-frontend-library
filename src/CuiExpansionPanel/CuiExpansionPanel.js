import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import styles from "../styles/ExpansionPanel";

function CuiExpansionPanel(props) {
  const { classes, header, details, ...other } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel {...other}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.heading}>{header}</div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>{details}</div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

CuiExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CuiExpansionPanel);
