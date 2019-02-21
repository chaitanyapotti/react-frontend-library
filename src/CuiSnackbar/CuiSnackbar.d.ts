import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { SnackbarProps } from "@material-ui/core/Snackbar/index";

export interface CuiSnackbarProps extends StandardProps<SnackbarProps, CuiSnackbarClassKey, "component"> {
  color: "info" | "success" | "warning" | "danger" | "primary" | "rose" | "white" | "transparent";
  close: boolean;
  icon: Function | string;
}

export type CuiSnackbarClassKey = "root" | "icon" | "iconButton";

declare const CuiSnackbar: React.ComponentType<CuiSnackbarProps>;

export default CuiSnackbar;
