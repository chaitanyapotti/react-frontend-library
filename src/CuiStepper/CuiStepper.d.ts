import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiStepperProps extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CuiStepperClassKey> {
  themeEngine?: "semantic" | "vault" | "tim";
  themeColor?: "primary" | "vault" | "info" | "success" | "warning" | "danger" | "rose" | "white" | "transparent";
}

export type CuiStepperClassKey = "root" | "button";

declare const CuiStepper: React.ComponentType<CuiStepperProps>;

export default CuiStepper;
