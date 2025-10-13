import Button from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps extends MuiButtonProps {}

export default Button as typeof import("@mui/material/Button").default;
