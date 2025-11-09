// Feature Components
import Dashboard from "@schoolify/features/shared/dashboard/components";

// Custom Utilities
import { useDashboardSidebarData } from "@schoolify/features/user/profile/dashboard/utilities/data";

// React Types
import type { ReactNode } from "react";

// Custom Types
interface ProfileDashboardProps {
  children: ReactNode;
}

const ProfileDashboard = (props: ProfileDashboardProps) => {
  // Props
  const { children } = props;
  const sidebarData = useDashboardSidebarData();
  // Render
  return (
    <>
      <Dashboard sidebarData={sidebarData}>{children}</Dashboard>
    </>
  );
};

export default ProfileDashboard;
