import List from "@mui/material/List";
import Box from "@schoolify/core/components/base/inputs/Box";
import Button from "@schoolify/core/components/base/inputs/Button";
import ListItem from "@schoolify/core/components/base/inputs/ListItem";
import ListItemText from "@schoolify/core/components/base/inputs/ListItemText";
import Typography from "@schoolify/core/components/base/inputs/Typography";
import useAppTheme from "@schoolify/core/hooks/common/useAppTheme";
import useClientDeviceType from "@schoolify/core/hooks/common/useClientDeviceType";
import DashboardAppBar from "@schoolify/features/shared/dashboard/components/AppBar";
import DashboardSidebar from "@schoolify/features/shared/dashboard/components/Sidebar";
import SidebarButton from "@schoolify/features/shared/dashboard/components/Sidebar/SidebarButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const isActive = (link: string) => location.pathname === link;

interface AppBarProps {
  handleNavigation: (path: string) => void;
}

const ProfileAppBar = (props: AppBarProps) => {
  const { handleNavigation } = props;

  // const { data, isLoading, error } = useListSummarySchools();
  const [openSchools, setOpenSchools] = useState<Record<string, boolean>>({});
  const theme = useAppTheme();
  // const userImpersonationStore = useUserImpersonationStore();
  const navigate = useNavigate();

  const toggleSchoolMenu = (schoolId: string) => {
    setOpenSchools((prev) => ({ ...prev, [schoolId]: !prev[schoolId] }));
  };
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const deviceType = useClientDeviceType();
  const isMobile = deviceType === "mobile";

  return (
    <>
      <DashboardAppBar
        open={open}
        handleDrawerClose={handleDrawerClose}
        handleDrawerOpen={handleDrawerOpen}
      >
        aa
      </DashboardAppBar>
    </>
  );
};

export default ProfileAppBar;
