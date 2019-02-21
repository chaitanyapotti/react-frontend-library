import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiInputProps extends StandardProps<ButtonProps, CuiInputClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiInputClassKey = "underline" | "labelRoot" | "input" | "whiteInput";

declare const CuiInput: React.ComponentType<CuiInputProps>;
