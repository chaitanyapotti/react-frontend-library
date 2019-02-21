import * as React from "react";
import { StandardProps, PropTypes } from "..";
import { ChipProps } from "@material-ui/core/Chip/index";

export interface CuiChipsProps extends StandardProps<ChipProps, CuiChipsClassKey, "component"> {}

export type CuiChipsClassKey = "root" | "chip";

declare const CuiChips: React.ComponentType<CuiChipsProps>;

export default CuiChips;
