// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabClassStudentsEndpointsData } from "@schoolify/features/user/school/management/classStudents/utilities/data";
import { useParams } from "react-router-dom";

const SchoolManagementClassStudentsPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.classStudents.index(schoolId)}
        data={tabClassStudentsEndpointsData}
      />
    </>
  );
};

export default SchoolManagementClassStudentsPage;
