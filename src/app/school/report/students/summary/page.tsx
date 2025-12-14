// MUI Components

import Box from "@schoolify/core/components/base/inputs/Box";
import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabEducationYearEndpointsData } from "@schoolify/features/user/school/report/educationYear/utilities/data";
import { useParams } from "react-router-dom";

const SchoolReportStudentSummaryPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      {/* <TabBox
        baseUrlPath={routes.school.report.student.summary.index(schoolId)}
        data={tabEducationYearEndpointsData}
      /> */}
      <Box >Summary</Box>
    </>
  );
};

export default SchoolReportStudentSummaryPage;
