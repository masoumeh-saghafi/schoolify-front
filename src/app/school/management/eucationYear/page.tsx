// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabEducationYearEndpointsData } from "@schoolify/features/user/school/management/educationYear/utilities/data";
import { useParams } from "react-router-dom";

const SchoolManagementEducationYearPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.educationYear.index(schoolId)}
        data={tabEducationYearEndpointsData}
      />
    </>
  );
};

export default SchoolManagementEducationYearPage;
