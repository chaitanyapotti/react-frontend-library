import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiPaginationProps extends StandardProps<ButtonProps, CuiPaginationClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiPaginationClassKey = "parallax" | "filter" | "small";

declare const CuiPagination: React.ComponentType<CuiPaginationProps>;

export default CuiPagination;
