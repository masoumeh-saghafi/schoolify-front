// Custom Hooks
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";

// React Types
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";

// React Types
import { useState, type ReactNode } from "react";
import DashboardSidebar from "@schoolify/features/shared/dashboard/components/Sidebar";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";
import DashboardAppBar from "./AppBar";
import SmallBox from "./core/SmallBox";

// Custom Types
interface DashboardProps {
  // href?: string;
  // key?: string;
  // onClick?: () => void;
  // isActive?: boolean;
  // enableBorder?: boolean;
  // disabled?: boolean;
  // children?: ReactNode;
}

function Dashboard(props: DashboardProps) {
  // Props
  // const { href, key, onClick, isActive, enableBorder, disabled, children } =    props;

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
          open={open}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
        >
          a
        </DashboardAppBar>
      </SmallBox>

      <DashboardSidebar open={open} handleDrawerClose={handleDrawerClose}>
        <Button>aaa</Button>
      </DashboardSidebar>

      <SmallBox>
        <Box>DASHBOARD</Box>
      </SmallBox>
    </>
  );
}
export default Dashboard;
