import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiButtonProps extends StandardProps<ButtonProps, CuiButtonClassKey, "component"> {
  themeEngine?: "material" | "semantic" | "vault";
}

export type CuiButtonClassKey = "material" | "semantic" | "vault";

declare const CuiButton: React.ComponentType<CuiButtonProps>;

export default CuiButton;
