import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import styles from "../styles/Stepper";

class CuiStepper extends React.Component {
  render() {
    const { classes, getSteps, activeStep, getStepContent, onClick } = this.props;
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );

    return (
      <div className={classes.root}>
        <Stepper alternativeLabel activeStep={activeStep} connector={connector}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>
                <div className="txt labelAlignment">{label}</div>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div />
          ) : (
            <div>
              <div className={classes.instructions}>{getStepContent(activeStep)}</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

CuiStepper.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(CuiStepper);
