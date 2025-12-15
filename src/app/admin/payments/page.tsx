// MUI Components
import Box from '@schoolify/core/components/base/inputs/Box'
import TabBox from '@schoolify/core/components/common/TabBox'
import routes from '@schoolify/core/utilities/routes'
import { tabAdminPyamentEndpointsData } from '@schoolify/features/admin/payments/utilities/data'
import TicketTabBox from '@schoolify/features/user/profile/tickets/components'

const AdminPaymentsPage = () => {
  // Render
  return (
    <>
      <TabBox
        baseUrlPath={routes.admin.payments.index()}
        data={tabAdminPyamentEndpointsData}
      />
    </>
  )
}

export default AdminPaymentsPage
