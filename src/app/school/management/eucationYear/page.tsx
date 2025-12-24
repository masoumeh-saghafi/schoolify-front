// React Type
import { useParams } from "react-router-dom";

// MUI Components
import TabBox from "@schoolify/core/components/common/TabBox";

// Custom Utilities
import routes from "@schoolify/core/utilities/routes";
import { tabEducationYearEndpointsData } from "@schoolify/features/user/school/management/educationYear/utilities/data";

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
