import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { GridProps } from "react-flexbox-grid";

export interface CuiGridProps extends StandardProps<GridProps, "component"> {}

declare const CuiGrid: React.ComponentType<CuiGridProps>;

export default CuiGrid;
