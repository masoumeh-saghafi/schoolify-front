// MUI Components
import SchoolManagementDashboard from "@schoolify/features/user/school/management/dashboard/components/dashboard";

// Feature Components

// React Types
import { Outlet } from "react-router-dom";

const SchoolManagementLayout = () => {
  // Render
  return (
    <>
      <SchoolManagementDashboard>
        <Outlet />
      </SchoolManagementDashboard>
    </>
  );
};

export default SchoolManagementLayout;
