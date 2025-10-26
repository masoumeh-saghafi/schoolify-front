import { useMediaQuery, useTheme } from "@mui/material";
import useAppTheme from "./useAppTheme";

// Contex
export function useClientDeviceType() {
  const theme = useAppTheme();

  // Mobile
  if (useMediaQuery(theme.breakpoints.down("md"))) {
    return "mobile";
  }
  return "desktop";
}

export default useClientDeviceType;
