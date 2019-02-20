import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { RowProps } from "react-flexbox-grid";

export interface CuiRowProps extends StandardProps<RowProps, "component"> {}

declare const CuiRow: React.ComponentType<CuiRowProps>;

export default CuiRow;
