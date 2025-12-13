// MUI Components
import SchoolReportDashboard from "@schoolify/features/user/school/report/dashboard/components/dashboard";

// Feature Components

// React Types
import { Outlet } from "react-router-dom";

const SchoolReportLayout = () => {
  // Render
  return (
    <>
      <SchoolReportDashboard>
        <Outlet />
      </SchoolReportDashboard>
    </>
  );
};

export default SchoolReportLayout;
