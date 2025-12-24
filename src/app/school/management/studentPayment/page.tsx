// React Type
import { useParams } from "react-router-dom";

// MUI Components
import TabBox from "@schoolify/core/components/common/TabBox";

// Custom Utilities
import routes from "@schoolify/core/utilities/routes";
import { tabStudentPaymentEndpointsData } from "@schoolify/features/user/school/management/studentPayment/utilities/data";


const SchoolManagementStudentPaymentPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.studentPayment.index(schoolId)}
        data={tabStudentPaymentEndpointsData}
      />
    </>
  );
};

export default SchoolManagementStudentPaymentPage;
