// React Type
import { useParams } from "react-router-dom";

// MUI Components
import TabBox from "@schoolify/core/components/common/TabBox";

// Custom Utilities
import routes from "@schoolify/core/utilities/routes";
import { tabStudentReportFullEndpointsData } from "@schoolify/features/user/school/report/students/full/utilities/data";

const SchoolReportStudentFullPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.report.student.full.index(schoolId)}
        data={tabStudentReportFullEndpointsData}
      />
    </>
  );
};

export default SchoolReportStudentFullPage;
