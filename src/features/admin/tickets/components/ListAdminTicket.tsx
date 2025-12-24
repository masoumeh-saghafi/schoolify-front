// React Type
import { useNavigate } from 'react-router-dom'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import { tabBoxGenerateFullUrlPath } from '@schoolify/core/components/common/tabBoxGenerateFullUrlPath'

// Custom Hooks
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import useListAdminTicket from '@schoolify/features/admin/tickets/hooks/useListAdminTicket'

// Custom Utilities
import { listAdminTicketColumns } from '@schoolify/features/admin/tickets/utilities/listStudentColumns'

// Custom Types
interface ListAdminTicketProps {}

const ListAdminTicket = (props: ListAdminTicketProps) => {
  // Props
  // const {} = props;

  // Hooks
  const navigate = useNavigate()
  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListAdminTicket({
    pagination,
    filters
  })

  // Helpers
  const columns = listAdminTicketColumns

  // Handlers
  const handleOpenAdminTicketDetails = async (id: string, row: any) => {
    const changeTabUrl = tabBoxGenerateFullUrlPath(
      //routes.profile.tickets.index(),
      location.pathname,
      `ticket?id=${id}`
    )
    navigate(changeTabUrl)
  }

  // Render
  return (
    <ContentBox label='لیست تیکت‌ها'>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        disableDeleteRowButton={true}
        disableUpdateRowButton={true}
        disableAddRowButton={false}
        addRowTitle='جزئیات'
        onAddRow={handleOpenAdminTicketDetails}
      />
    </ContentBox>
  )
}
export default ListAdminTicket
