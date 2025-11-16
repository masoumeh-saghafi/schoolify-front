// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabEducationGradeEndpointsData } from "@schoolify/features/user/school/management/educationGrade/utilities/data";
import { useParams } from "react-router-dom";

const SchoolManagementEducationGradePage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationGrade.index(schoolId)}
        data={tabEducationGradeEndpointsData}
      />
    </>
  );
};

export default SchoolManagementEducationGradePage;
