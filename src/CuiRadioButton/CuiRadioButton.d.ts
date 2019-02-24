import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { RadioProps } from "@material-ui/core/Radio/index";

export interface CuiRadioButtonProps extends StandardProps<RadioProps, CuiRadioButtonClassKey, "component"> {}

export type CuiRadioButtonClassKey = "avatar" | "orangeAvatar" | "purpleAvatar";

declare const CuiRadioButton: React.ComponentType<CuiRadioButtonProps>;

export default CuiRadioButton;
