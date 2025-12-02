// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabStudentPaymentEndpointsData } from "@schoolify/features/user/school/management/studentPayment/utilities/data";

import { useParams } from "react-router-dom";

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
