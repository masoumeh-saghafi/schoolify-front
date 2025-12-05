// React Types
import { useState, type ReactNode } from "react";

// Feature Components
import DashboardSidebar, {
  type DashboardSidebarDataProps,
  type DashboardSidebarExitButtonDataProps,
} from "@schoolify/features/shared/dashboard/components/Sidebar";
import DashboardAppBar, {
  type DashboardAppBarDataProps,
} from "@schoolify/features/shared/dashboard/components/AppBar/index";
import SmallBox from "@schoolify/features/shared/dashboard/components/core/SmallBox";

// Custom Types
interface DashboardProps {
  appbarData?: DashboardAppBarDataProps[];
  sidebarData?: DashboardSidebarDataProps[];
  sidebarExitButtonData: DashboardSidebarExitButtonDataProps;
  children: ReactNode;
}

const Dashboard = (props: DashboardProps) => {
  // Props
  const { appbarData, sidebarData, sidebarExitButtonData, children } = props;

  // States
  const [open, setOpen] = useState(false);

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
        exitButtonData={sidebarExitButtonData}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />

      <SmallBox>{children}</SmallBox>
    </>
  );
};
export default Dashboard;
