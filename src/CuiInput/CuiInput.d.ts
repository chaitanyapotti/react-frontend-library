import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { InputProps } from "@material-ui/core/Input/index";

export interface CuiInputProps extends StandardProps<InputProps, CuiInputClassKey, "component"> {
  labelText: any;
  labelProps: object;
  id: string;
  inputProps: object;
  formControlProps: object;
  inputRootCustomClasses: string;
  error: boolean;
  success: boolean;
  white: boolean;
}

export type CuiInputClassKey = "underline" | "labelRoot" | "input" | "whiteInput";

declare const CuiInput: React.ComponentType<CuiInputProps>;
