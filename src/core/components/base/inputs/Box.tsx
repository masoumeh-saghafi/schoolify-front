   import Box from "@mui/material/Box";
import type { BoxProps as MuiBoxProps } from "@mui/material/Box";

export interface BoxProps extends MuiBoxProps {}

export default Box as typeof import("@mui/material/Box").default;
