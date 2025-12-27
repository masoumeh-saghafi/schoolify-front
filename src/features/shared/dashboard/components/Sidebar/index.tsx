// MUI Components
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

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
import UserProfileButton from "@schoolify/core/shared/UserProfileButton";

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

export interface DashboardSidebarExitButtonDataProps {
  title: string;
  onClick: () => void;
}

interface DashboardSidebarProps {
  open: boolean;
  handleDrawerClose: () => void;

  data?: DashboardSidebarDataProps[];
  exitButtonData: DashboardSidebarExitButtonDataProps;
}

const DashboardSidebar = (props: DashboardSidebarProps) => {
  // Props
  const { open, handleDrawerClose, exitButtonData, data } = props;

  // Hooks
  const theme = useAppTheme();
  const deviceType = useClientDeviceType();

  // Render Helpers
  const renderItems = () => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {deviceType === "mobile" && <UserProfileButton />}

      {/* Scrollable List */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          pr: 1, // to avoid scrollbar over content
        }}
      >
        {data?.map((item) => (
          <SidebarListItem
            key={item.key}
            title={item.title}
            link={item.link}
            icon={item?.icon}
            type={item.type ?? "listItem"}
            isActive={item.link === location.pathname}
            disabled={item.disabled}
            children={item.children?.map((child) => ({ ...child }))}
          />
        ))}
      </Box>

      {/* Exit Button */}
      <Button
        variant="outlined"
        sx={{
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          flexShrink: 0,
          mb: 1,
          mt: 6,
          mx: 2,
        }}
        onClick={exitButtonData.onClick}
      >
        {exitButtonData.title}
      </Button>
    </Box>
  );

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
