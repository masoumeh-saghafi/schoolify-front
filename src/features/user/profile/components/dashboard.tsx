// Feature Components
import Dashboard from "@schoolify/features/shared/dashboard/components";

// Custom Utilities
import { sidebarData } from "@schoolify/features/user/profile/utilities/data";

// React Types
import type { ReactNode } from "react";

// Custom Types
interface ProfileDashboardProps {
  children: ReactNode;
}

const ProfileDashboard = (props: ProfileDashboardProps) => {
  // Props
  const { children } = props;

// Render
  return (
    <>
      <Dashboard sidebarData={sidebarData}>{children}</Dashboard>
    </>
  );
};

export default ProfileDashboard;
