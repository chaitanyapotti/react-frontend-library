import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiButtonProps extends StandardProps<ButtonProps, CuiButtonClassKey, "component"> {
  themeEngine?: "material" | "semantic" | "vault" | "tim";
  color?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
  size?: "sm" | "lg";
}

export type CuiButtonClassKey = "material" | "semantic" | "vault" | "tim";

declare const CuiButton: React.ComponentType<CuiButtonProps>;

export default CuiButton;
