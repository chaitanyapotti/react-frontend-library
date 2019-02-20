import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiSnackbarProps extends StandardProps<ButtonProps, CuiSnackbarClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiSnackbarClassKey = "root" | "icon" | "iconButton";

declare const CuiSnackbar: React.ComponentType<CuiSnackbarProps>;

export default CuiSnackbar;
