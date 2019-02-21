import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiUploadButtonProps extends StandardProps<ButtonProps, CuiUploadButtonClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
  simple?: boolean;
  round?: boolean;
  link?: boolean;
  block?: boolean;
  justIcon?: boolean;
}

export type CuiUploadButtonClassKey =
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

declare const CuiUploadButton: React.ComponentType<CuiUploadButtonProps>;

export default CuiUploadButton;
