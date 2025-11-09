// Feature Components
import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";

// Custom Utilities
import { tabData } from "@schoolify/features/user/profile/accountManagement/utilities/data";

// Custom Types
// interface AccountManagementTabBoxProps {}

const AccountManagementTabBox = () => {
  // Props
  // const {} = props;

  // Render
  return (
    <>
      <TabBox baseUrlPath={routes.profile} data={tabData} />
    </>
  );
};

export default AccountManagementTabBox;
