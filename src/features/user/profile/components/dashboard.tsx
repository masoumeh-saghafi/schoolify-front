import Dashboard from "@schoolify/features/shared/dashboard/components";
import type { ReactNode } from "react";
import { sidebarData } from "../utilities/data";

interface ProfileDashboardProps {
  children: ReactNode;
}

const ProfileDashboard = (props: ProfileDashboardProps) => {
  // Props
  const { children } = props;

  return (
    <>
      <Dashboard sidebarData={sidebarData}>{children}</Dashboard>
    </>
  );
};

export default ProfileDashboard;
