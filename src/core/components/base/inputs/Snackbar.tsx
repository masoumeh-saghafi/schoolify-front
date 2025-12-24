   import Snackbar from "@mui/material/Snackbar";
import type { SnackbarProps as MuiSnackbarProps } from "@mui/material/Snackbar";

export interface SnackbarProps extends MuiSnackbarProps {}

export default Snackbar as typeof import("@mui/material/Snackbar").default;
