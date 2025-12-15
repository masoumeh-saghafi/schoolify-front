// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabStudentReportSummaryEndpointsData } from "@schoolify/features/user/school/report/students/summary/utilities/data";
import { useParams } from "react-router-dom";

const SchoolReportStudentSummaryPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.report.student.summary.index(schoolId)}
        data={tabStudentReportSummaryEndpointsData}
      />
   
    </>
  );
};

export default SchoolReportStudentSummaryPage;
