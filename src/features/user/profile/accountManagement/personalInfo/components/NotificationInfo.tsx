import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import useListUserNotifications from '../hooks/useListUserNotification'
import { useEffect } from 'react'
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import { NotificationData } from '../utilities/notificationsData'

interface UserNotificationsGridProps {
  refetchNumber?: number
  onAddRow?: (id: string, row: any) => void
  isSelector?: boolean
}

const NotificationInfo = (props: UserNotificationsGridProps) => {
  const { refetchNumber, onAddRow, isSelector = false } = props
  const {
    filters,
   //  order,
   //  paginationModel,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading, error, refetch } = useListUserNotifications(
   //  paginationModel.page + 1,
   //  paginationModel.pageSize,
    filters,
   //  order
  )

  useEffect(() => {
    refetch()
  }, [refetchNumber])



  return (
    <ContentBox label='اعلانات'>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={NotificationData()}
        onFilterChange={handleFilterChange}
        onDeleteRowGetTitle={row => `${row.data.title}`}
        onAddRow={onAddRow}
        disableAddRowButton={!isSelector}
        disableDeleteRowButton={!isSelector}
        disableUpdateRowButton={!isSelector}
      />
    </ContentBox>
  )
}
export default NotificationInfo
