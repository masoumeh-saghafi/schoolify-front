// Core Components
import TabBox from "@schoolify/core/components/common/TabBox";

// Custom Utilities
import routes from "@schoolify/core/utilities/routes";
import { tabTicketData } from "@schoolify/features/user/profile/tickets/utilities/data";


// Custom Types
// interface TicketTabBoxProps {}

const TicketTabBox = () => {
  // Props
  // const {} = props;

  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.profile.tickets.index()}
        data={tabTicketData}
      />
    </>
  );
};

export default TicketTabBox;
