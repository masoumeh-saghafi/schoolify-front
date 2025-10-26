// Custom Hooks
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

// React Types
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// React Types
import { useState, type ReactNode } from "react";
import DashboardSidebar from "@schoolify/features/shared/dashboard/components/Sidebar";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";

// Custom Types
interface SmallBoxProps {
  children: ReactNode;
}

function SmallBox(props: SmallBoxProps) {
  // Props
  const { children } = props;

  // States

  // Hooks
  const deviceType = useClientDeviceType();
  const isMobile = deviceType === "mobile";

  // Handlers

  // Render
  return (
    <Box
      sx={{
        width: !isMobile ? "calc(100%-300px)" : undefined,
        ml: !isMobile ? "300px" : undefined,
      }}
    >
      {children}
    </Box>
  );
}
export default SmallBox;
