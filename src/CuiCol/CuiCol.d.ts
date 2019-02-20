import * as React from "react";
import { StandardProps, PropTypes } from "..";

export interface CuiColProps extends StandardProps<"component"> {}

declare const CuiCol: React.ComponentType<CuiColProps>;

export default CuiCol;
