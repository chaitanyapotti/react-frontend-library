import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { DialogProps } from "@material-ui/core/Dialog/index";

export interface CuiModalProps extends StandardProps<DialogProps, "component"> {}

declare const CuiModal: React.ComponentType<CuiModalProps>;

export default CuiModal;
