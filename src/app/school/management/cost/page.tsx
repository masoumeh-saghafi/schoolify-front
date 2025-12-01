// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabCostEndpointsData } from "@schoolify/features/user/school/management/cost/utilities/data";
import { useParams } from "react-router-dom";

const SchoolManagementCostPage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.cost.index(schoolId)}
        data={tabCostEndpointsData}
      />
    </>
  );
};

export default SchoolManagementCostPage;
