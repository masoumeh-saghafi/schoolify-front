// Feature Components
import Dashboard from "@schoolify/features/shared/dashboard/components";

// Custom Utilities
import { schoolManagementSidebarData } from "@schoolify/features/user/school/management/dashboard/utilities/data";

// React Types
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import useListSummarySchools from "@schoolify/features/user/shared/school/hooks/useListSummarySchools";

// Custom Types
interface SchoolManagementDashboardProps {
  children: ReactNode;
}

const SchoolManagementDashboard = (props: SchoolManagementDashboardProps) => {
  const { schoolId = "" } = useParams();

  // Props
  const { data: schoolData } = useListSummarySchools();

  const school = schoolData?.filter((x) => x.id == schoolId)[0];

  const sidebarData = schoolManagementSidebarData(
    schoolId,
    school?.data?.title,
    school?.data?.role
  );

  const { children } = props;

  // Render
  return (
    <>
      <Dashboard sidebarData={sidebarData}>{children}</Dashboard>
    </>
  );
};

export default SchoolManagementDashboard;
