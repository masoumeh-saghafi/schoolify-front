// Custom Hooks
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

// React Types
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";
import HeaderMobileDrawer from "@schoolify/features/shared/layout/header/MobileDrawer";
import SidebarButton from "./SidebarButton";
import type { JSX } from "@emotion/react/jsx-runtime";
import ListItemText from "@schoolify/core/components/base/inputs/ListItemText";
import ListItem from "@schoolify/core/components/base/inputs/ListItem";
import List from "@mui/material/List";
import SidebarListItem from "./SidebarListItem";

// Custom Types
export interface DashboardSidebarDataProps {
  title: string;
  link: string;
  icon?: JSX.Element;
}

interface DashboardSidebarProps {
  open: boolean;
  handleDrawerClose: () => void;

  data?: DashboardSidebarDataProps[];
}

function DashboardSidebar(props: DashboardSidebarProps) {
  // Props
  const { open, handleDrawerClose, data } = props;

  // Hooks
  const theme = useAppTheme();

  // States
  const deviceType = useClientDeviceType();

  // Custom Utils
  const renderItems = () =>
    data?.map((item) => (
      <SidebarListItem text={item.title} href={item.link} icon={item.icon} />
    ));

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
          {renderItems()}
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
            {renderItems()}
          </Box>
        </Box>
      )}
    </>
  );
}
export default DashboardSidebar;
