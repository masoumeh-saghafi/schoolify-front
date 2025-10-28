// Feature Components
import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import Dashboard from "@schoolify/features/shared/dashboard/components";

// Custom Utilities
import { tabData } from "@schoolify/features/user/profile/accountManagement/utilities/data";

// Custom Types
interface AccountManagementTabBoxProps {}

const AccountManagementTabBox = (props: AccountManagementTabBoxProps) => {
  // Props
  const {} = props;

  // Render
  return (
    <>
      <TabBox baseUrlPath={routes.profile} data={tabData} />
    </>
  );
};

export default AccountManagementTabBox;
