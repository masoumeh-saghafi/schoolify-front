// Feature Components
import Dashboard from "@schoolify/features/shared/dashboard/components";

// Custom Utilities
import { schoolReportSidebarData } from "@schoolify/features/user/school/report/dashboard/utilities/data";

// React Types
import type { ReactNode } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useListSummarySchools from "@schoolify/features/user/shared/school/hooks/useListSummarySchools";
import type { DashboardSidebarExitButtonDataProps } from "@schoolify/features/shared/dashboard/components/Sidebar";
import routes from "@schoolify/core/utilities/routes";

// Custom Types
interface SchoolReportDashboardProps {
  children: ReactNode;
}

const SchoolReportDashboard = (props: SchoolReportDashboardProps) => {
  const { schoolId = "" } = useParams();

  // Props
  const { data: schoolData } = useListSummarySchools();

  const school = schoolData?.filter((x) => x.id == schoolId)[0];

  const sidebarData = schoolReportSidebarData(
    schoolId,
    school?.data?.title,
    school?.data?.role
  );

  // Hooks
  const navigate = useNavigate();

  const exitButtonData: DashboardSidebarExitButtonDataProps = {
    title: "خروج از داشبورد",
    onClick: () => navigate(routes.profile.baseUrl),
  };

  const { children } = props;

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

export default SchoolReportDashboard;
