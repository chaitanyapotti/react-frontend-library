import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ButtonProps } from "@material-ui/core/Button/index";

export interface CuiUploadButtonProps extends StandardProps<ButtonProps, "component"> {}

declare const CuiUploadButton: React.ComponentType<CuiUploadButtonProps>;

export default CuiUploadButton;
