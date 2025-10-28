// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";

// Feature Components
import SidebarListItem from "@schoolify/features/shared/dashboard/components/Sidebar/SidebarListItem";
import HeaderMobileDrawer from "@schoolify/features/shared/layout/header/MobileDrawer";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";

//Type Definitions
import type { JSX } from "@emotion/react/jsx-runtime";

// Custom Types
export interface DashboardSidebarDataProps {
  key: string;
  title: string;
  link: string;
  icon?: JSX.Element;
}

interface DashboardSidebarProps {
  open: boolean;
  handleDrawerClose: () => void;

  data?: DashboardSidebarDataProps[];
}

const DashboardSidebar = (props: DashboardSidebarProps) => {
  // Props
  const { open, handleDrawerClose, data } = props;

  // Hooks
  const theme = useAppTheme();
  const deviceType = useClientDeviceType();

  // Render Helpers
  const renderItems = () =>
    data?.map((item) => (
      <SidebarListItem
        key={item.key}
        text={item.title}
        href={item.link}
        icon={item.icon}
      />
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
          <Box
            sx={{
              mt: 2,
            }}
          >
            {renderItems()}
          </Box>
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
};
export default DashboardSidebar;
