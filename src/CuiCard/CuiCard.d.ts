import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { CardProps } from "@material-ui/core/Card/index";

export interface CuiCardProps extends StandardProps<ButtonProps, CuiCardClassKey, "component"> {
  themeEngine?: "material" | "semantic" | "vault" | "tim";
}

export type CuiCardClassKey = "material" | "semantic" | "vault" | "tim";

declare const CuiCard: React.ComponentType<CuiCardProps>;

export default CuiCard;
