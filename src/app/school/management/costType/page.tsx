// MUI Components

import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabCostTypeEndpointsData } from "@schoolify/features/user/school/management/costType/utilities/data";
import { useParams } from "react-router-dom";

const SchoolManagementCostTypePage = () => {
  // Hooks
  const { schoolId = "" } = useParams();

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.school.management.costType.index(schoolId)}
        data={tabCostTypeEndpointsData}
      />
    </>
  );
};

export default SchoolManagementCostTypePage;
