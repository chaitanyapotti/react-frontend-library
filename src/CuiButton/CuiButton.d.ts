import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiButtonProps extends StandardProps<ButtonProps, CuiButtonClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
  simple?: boolean;
  round?: boolean;
  link?: boolean;
  justIcon?: boolean;
}

export type CuiButtonClassKey =
  | "white"
  | "vault"
  | "rose"
  | "primary"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "simple"
  | "transparent"
  | "disabled"
  | "lg"
  | "sm"
  | "round"
  | "link"
  | "semanticbutton"
  | "timbutton"
  | "vaultbutton";

declare const CuiButton: React.ComponentType<CuiButtonProps>;

export default CuiButton;
