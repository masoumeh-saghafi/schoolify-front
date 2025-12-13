// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabEducationYearEndpointsData } from "@schoolify/features/user/school/report/educationYear/utilities/data";
import { useParams } from "react-router-dom";

const SchoolReportStudentFullPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.report.student.full.index(schoolId)}
        data={tabEducationYearEndpointsData}
      />
    </>
  );
};

export default SchoolReportStudentFullPage;
