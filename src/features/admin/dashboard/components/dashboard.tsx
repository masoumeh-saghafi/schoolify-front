// Feature Components
import routes from "@schoolify/core/utilities/routes";
import Dashboard from "@schoolify/features/shared/dashboard/components";
import type { DashboardSidebarExitButtonDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

// Custom Utilities

// React Types
import { useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { adminDashboardSidebarData } from "../utilities/data";
import useUserProfile from "@schoolify/features/shared/profile/hooks/useUserProfile";

// Custom Types
interface AdminDashboardProps {
  children: ReactNode;
}

const AdminDashboard = (props: AdminDashboardProps) => {
  // Props
  const { children } = props;
  const navigate = useNavigate();

  const { data, isLoading } = useUserProfile();

  const sidebarData = adminDashboardSidebarData(data?.data?.role);

  const exitButtonData: DashboardSidebarExitButtonDataProps = {
    title: "خروج از حساب",
    onClick: () => navigate(routes.logout),
  };

  useEffect(() => {
    if (isLoading) return;

    if (!data?.data?.role || data.data.role === "user") {
      navigate(routes.profile.baseUrl);
    }
  }, [data]);

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

export default AdminDashboard;
