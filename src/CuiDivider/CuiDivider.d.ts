import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { DividerProps } from "@material-ui/core/Divider/index";

export interface CuiDividerProps extends StandardProps<DividerProps, "component"> {}

declare const CuiDivider: React.ComponentType<CuiDividerProps>;

export default CuiDivider;
