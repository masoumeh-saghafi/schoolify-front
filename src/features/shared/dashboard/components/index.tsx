// Custom Hooks
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

// React Types
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// React Types
import { useState, type ReactNode } from "react";
import DashboardSidebar, {
  type DashboardSidebarDataProps,
} from "@schoolify/features/shared/dashboard/components/Sidebar";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";
import DashboardAppBar, { type DashboardAppBarDataProps } from "./AppBar";
import SmallBox from "./core/SmallBox";
import SidebarButton from "./Sidebar/SidebarButton";

// Custom Types
interface DashboardProps {
  appbarData?: DashboardAppBarDataProps[];
  sidebarData?: DashboardSidebarDataProps[];

  children: ReactNode;
}

function Dashboard(props: DashboardProps) {
  // Props
  const { appbarData, sidebarData, children } = props;

  // States

  // Hooks
  const [open, setOpen] = useState(false);
  const theme = useAppTheme();

  // Handlers
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  // Render
  return (
    <>
      <SmallBox>
        <DashboardAppBar
          data={appbarData}
          open={open}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
        />
      </SmallBox>

      <DashboardSidebar
        data={sidebarData}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      <SmallBox>{children}</SmallBox>
    </>
  );
}
export default Dashboard;
