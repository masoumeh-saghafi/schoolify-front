// MUI Components
import Drawer from "@schoolify/core/components/base/inputs/Drawer";

// Custom Hooks
import useMediaQuery from "@mui/material/useMediaQuery";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// React Types
import type { ReactNode } from "react";

// Custom Types
interface HeaderMobileDrawerProps {
  drawerWidth: number;
  collapsedDrawerWidth: number;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const HeaderMobileDrawer = (props: HeaderMobileDrawerProps) => {
  // Props
  const { drawerWidth, collapsedDrawerWidth, open, onClose, children } = props;

  // Hooks
  const theme = useAppTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Render
  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : collapsedDrawerWidth,
        flexShrink: 0,
        ".MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedDrawerWidth,
          overflowX: "hidden",
          position: "fixed",
          top: isMobile ? 54 : 64,
          right: 1,
          height: `calc(100% - ${isMobile ? 54 : 64}px)`,
          display: { xs: "flex", md: "none" },
        },
      }}
      variant="temporary"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
    >
      {children}
    </Drawer>
  );
};

export default HeaderMobileDrawer;
