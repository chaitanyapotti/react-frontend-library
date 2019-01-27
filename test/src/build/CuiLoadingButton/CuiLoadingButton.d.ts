import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiLoadingButtonProps extends StandardProps<ButtonProps, CuiLoadingButtonClassKey, "component"> {
  themeEngine?: "material" | "semantic" | "vault";
}

export type CuiLoadingButtonClassKey = "material" | "semantic" | "vault";

declare const CuiLoadingButton: React.ComponentType<CuiLoadingButtonProps>;

export default CuiLoadingButton;
