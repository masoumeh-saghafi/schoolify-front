// MUI Components
import TabBox from "@schoolify/core/components/common/TabBox";
import routes from "@schoolify/core/utilities/routes";
import { tabAdminTicketData } from "@schoolify/features/admin/tickets/utilities/data";

const AdminTicketPage = () => {
  // Render
  return (
    <>
  <TabBox
  baseUrlPath={routes.admin.tickets.index()}
  data={tabAdminTicketData}
/>

    </>
  );
};

export default AdminTicketPage;
