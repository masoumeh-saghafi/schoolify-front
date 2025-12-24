   import Alert from "@mui/material/Alert";
import type { AlertProps as MuiAlertProps } from "@mui/material/Alert";

export interface AlertProps extends MuiAlertProps {}

export default Alert as typeof import("@mui/material/Alert").default;
