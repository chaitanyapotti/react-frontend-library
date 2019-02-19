import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { CardProps } from "@material-ui/core/Card/index";

export interface CuiCardProps extends StandardProps<CardProps, CuiCardClassKey, "component"> {
  themeEngine?: "semantic" | "vault" | "tim";
  plain?: boolean;
  profile?: boolean;
  chart?: boolean;
}

export type CuiCardClassKey = "semantic" | "vault" | "tim";

declare const CuiCard: React.ComponentType<CuiCardProps>;

export default CuiCard;
