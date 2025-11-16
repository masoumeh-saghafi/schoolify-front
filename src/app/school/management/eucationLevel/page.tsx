// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabEducationLevelEndpointsData } from "@schoolify/features/user/school/management/educationLevel/utilities/data";
import { useParams } from "react-router-dom";

const SchoolManagementEducationLevelPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationLevel.index(schoolId)}
        data={tabEducationLevelEndpointsData}
      />
    </>
  );
};

export default SchoolManagementEducationLevelPage;
