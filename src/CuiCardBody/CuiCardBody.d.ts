import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiCardBodyProps extends StandardProps<ButtonProps, CuiCardBodyClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiCardBodyClassKey = "cardBody";

declare const CuiCardBody: React.ComponentType<CuiCardBodyProps>;

export default CuiCardBody;
