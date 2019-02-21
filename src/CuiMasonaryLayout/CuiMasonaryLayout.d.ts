import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiMasonaryLayoutProps extends StandardProps<"component"> {
  columns: number;
  gap: number;
  children: any;
}

declare const CuiMasonaryLayout: React.ComponentType<CuiMasonaryLayoutProps>;

export default CuiMasonaryLayout;
