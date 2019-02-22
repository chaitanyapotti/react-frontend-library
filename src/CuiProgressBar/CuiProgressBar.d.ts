import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { LinearProgressProps } from "@material-ui/core/LinearProgress/index";

export interface CuiProgressBarProps extends StandardProps<LinearProgressProps, CuiProgressBarClassKey, "component"> {
  color?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiProgressBarClassKey = "root" | "bar";

declare const CuiProgressBar: React.ComponentType<CuiProgressBarProps>;

export default CuiProgressBar;
