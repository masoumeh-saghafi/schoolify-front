// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabSchoolStudentData } from "@schoolify/features/user/school/management/student/utilities/data";
import { useParams } from "react-router-dom";

const SchoolManagementStudentPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.student.index(schoolId)}
        data={tabSchoolStudentData}
      />
    </>
  );
};

export default SchoolManagementStudentPage;
