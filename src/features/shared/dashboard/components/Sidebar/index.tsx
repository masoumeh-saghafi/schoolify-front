// Custom Hooks
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

// React Types
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";
import HeaderMobileDrawer from "@schoolify/features/shared/layout/header/MobileDrawer";

// React Types
import { useState, type ReactNode } from "react";

// Custom Types
interface DashboardSidebarProps {
  open: boolean;
  handleDrawerClose: () => void;

  children: ReactNode;
}

function DashboardSidebar(props: DashboardSidebarProps) {
  // Props
  const { open, handleDrawerClose, children } = props;

  // Hooks
  const theme = useAppTheme();

  // States
  const deviceType = useClientDeviceType();

  // Render
  return (
    <>
      {deviceType === "mobile" && (
        <HeaderMobileDrawer
          collapsedDrawerWidth={0}
          drawerWidth={240}
          open={open}
          onClose={handleDrawerClose}
        >
          {children}
        </HeaderMobileDrawer>
      )}

      {deviceType === "desktop" && (
        <Box
          sx={{
            width: "300px",
            position: "fixed",
            display: "flex",
            top: 0,
            bottom: 0,
          }}
        >
          <Box
            sx={{
              m: 2,
              px: 1,
              pt: 2,
              borderRadius: 5,
              backgroundColor: theme.palette.background.paper,
              flexGrow: 1,
              position: "relative",
            }}
          >
            {children}
          </Box>
        </Box>
      )}
    </>
  );
}
export default DashboardSidebar;
