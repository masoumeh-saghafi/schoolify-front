// Feature Components
import routes from "@schoolify/core/utilities/routes";
import Dashboard from "@schoolify/features/shared/dashboard/components";
import type { DashboardSidebarExitButtonDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";

// Custom Utilities

// React Types
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { adminDashboardSidebarData } from "../utilities/data";

// Custom Types
interface AdminDashboardProps {
  children: ReactNode;
}

const AdminDashboard = (props: AdminDashboardProps) => {
  // Props
  const { children } = props;
  const sidebarData = adminDashboardSidebarData("owner");

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

export default AdminDashboard;
