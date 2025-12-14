// Feature Components
import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabTicketData } from "../utilities/data";

// Custom Utilities

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
