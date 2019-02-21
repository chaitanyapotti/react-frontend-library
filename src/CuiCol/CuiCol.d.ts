import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ColProps } from "react-flexbox-grid";

export interface CuiColProps extends StandardProps<ColProps, "component"> {}

declare const CuiCol: React.ComponentType<CuiColProps>;

export default CuiCol;
