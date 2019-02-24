import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { CheckboxProps } from "@material-ui/core/Checkbox/index";

export interface CuiCheckboxProps extends StandardProps<CheckboxProps, "component"> {}

declare const CuiCheckbox: React.ComponentType<CuiCheckboxProps>;

export default CuiCheckbox;
