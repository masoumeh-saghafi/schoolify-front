// Feature Components
import routes from "@schoolify/core/utilities/routes";
import Dashboard from "@schoolify/features/shared/dashboard/components";
import type { DashboardSidebarExitButtonDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

// Custom Utilities
import { useDashboardSidebarData } from "@schoolify/features/user/profile/dashboard/utilities/data";

// React Types
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

// Custom Types
interface ProfileDashboardProps {
  children: ReactNode;
}

const ProfileDashboard = (props: ProfileDashboardProps) => {
  // Props
  const { children } = props;
  const sidebarData = useDashboardSidebarData();

  const navigate = useNavigate();

  const exitButtonData: DashboardSidebarExitButtonDataProps = {
    title: "خروج از حساب",
    onClick: () => navigate(routes.logout),
  };

  // Render
  return (
    <>
      <Dashboard
        sidebarData={sidebarData}
        sidebarExitButtonData={exitButtonData}
      >
        {children}
      </Dashboard>
    </>
  );
};

export default ProfileDashboard;
