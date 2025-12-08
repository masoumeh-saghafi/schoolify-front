// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabUserRoleEndpointsData } from "@schoolify/features/user/school/management/userRole/utilities/data";

import { useParams } from "react-router-dom";

const SchoolManagementUserRolePage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.userRoles.index(schoolId)}
        data={tabUserRoleEndpointsData}
      />
    </>
  );
};

export default SchoolManagementUserRolePage;
