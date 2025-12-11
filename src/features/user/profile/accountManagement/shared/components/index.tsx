// Feature Components
import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";

// Custom Utilities
import { tabData } from "@schoolify/features/user/profile/accountManagement/shared/utilities/data";

// Custom Types
// interface AccountManagementTabBoxProps {}

const AccountManagementTabBox = () => {
  // Props
  // const {} = props;

  // Render
  return (
    <>
      <TabBox baseUrlPath={routes.profile.baseUrl} data={tabData} />
    </>
  );
};

export default AccountManagementTabBox;
