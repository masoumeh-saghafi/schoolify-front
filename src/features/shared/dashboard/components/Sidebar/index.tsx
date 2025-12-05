// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";

// Feature Components
import SidebarListItem, {
  type SidebarItemType,
} from "@schoolify/features/shared/dashboard/components/Sidebar/SidebarListItem";
import HeaderMobileDrawer from "@schoolify/features/shared/layout/header/MobileDrawer";

// Custom Hooks
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";

//Type Definitions
import type { JSX } from "@emotion/react/jsx-runtime";

// Custom Types
// Base shared interface
interface DashboardSidebarBaseItem {
  key: string;
  title: string;
  link?: string;
  type?: SidebarItemType;
  icon?: JSX.Element | null;
  disabled?: boolean;
}

// Parent item (supports children)
export interface DashboardSidebarDataProps extends DashboardSidebarBaseItem {
  children?: DashboardSidebarDataChildrenProps[];
}

// Child item (same structure, but no children)
export type DashboardSidebarDataChildrenProps = DashboardSidebarBaseItem;

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
        title={item.title}
        link={item.link}
        icon={item?.icon}
        type={item.type ?? "listItem"}
        isActive={item.link === location.pathname}
        children={item.children?.map((child) => ({ ...child }))}
      />
    ));

  // Render
  return (
    <>
      {deviceType === "mobile" && (
        <Box>
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
        </Box>
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
