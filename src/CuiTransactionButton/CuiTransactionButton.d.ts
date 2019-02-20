import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiLoadingButtonProps extends StandardProps<ButtonProps, CuiLoadingButtonClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
  simple?: boolean;
  round?: boolean;
  link?: boolean;
  block?: boolean;
  justIcon?: boolean;
  loading?: boolean;
  transaction?: boolean;
}

export type CuiLoadingButtonClassKey = "material" | "semantic" | "vault";

declare const CuiLoadingButton: React.ComponentType<CuiLoadingButtonProps>;

export default CuiLoadingButton;
