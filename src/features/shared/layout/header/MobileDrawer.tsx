// React Types
import type { ReactNode } from "react";

// MUI Components
import Drawer from "@schoolify/core/components/base/inputs/Drawer";

// Core Components
import useClientDeviceTypeIsMobile from "@schoolify/core/hooks/common/useClientDeviceTypeIsMobile";

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
  const isMobile = useClientDeviceTypeIsMobile();

  // Render
  return (

    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
      slotProps={{
        transition: {
          direction: "left", 
          timeout: 300,
        },
      }}
      sx={{
        width: open ? drawerWidth : collapsedDrawerWidth,
        flexShrink: 0,
        ".MuiDrawer-paper": {
          width: open ? drawerWidth : collapsedDrawerWidth,
          overflowX: "hidden",
          position: "fixed",
          top: isMobile ? 54 : 64,
          right: 0,
          height: `calc(100% - ${isMobile ? 54 : 64}px)`,
          display: { xs: "flex", md: "none" },
        
        },
      }}
    >
      {children}
    </Drawer>
  );
};

export default HeaderMobileDrawer;
