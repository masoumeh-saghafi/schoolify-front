// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import SchoolManagementStudent from "@schoolify/features/user/school/management/students/components/AddStudent";
import { tabSchoolStudentData } from "@schoolify/features/user/school/management/students/utilities/data";

const SchoolManagementStudentPage = () => {
  // Render
  return (
   <>
  <TabBox
    baseUrlPath={routes.school.management.baseUrl}
    data={tabSchoolStudentData}
  />
</>

  );
};

export default SchoolManagementStudentPage;
