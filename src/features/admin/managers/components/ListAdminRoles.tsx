// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'

// Custom Hooks
import useListAdminRoles from '@schoolify/features/admin/managers/hooks/useListAdminRoles'
import useDeleteAdminRole from '@schoolify/features/admin/managers/hooks/useDeleteAdminRole'

// Custom Types
import type ListAdminRolesEntity from '@schoolify/features/admin/managers/types/api/ListAdminRolesEntity'

// Custom Utilities
import { listAdminRolesColumns } from '@schoolify/features/admin/managers/utilities/listUserRolesColumns'





// Custom Types
// interface ListStudentProps {}

const ListAdminRoles = () => {
  // Props
  // const {} = props;

  // Hooks

  const { mutateAsync: deleteAdminRole } = useDeleteAdminRole()

  const {
    filters,
    paginationData: pagination,
    handleFilterChange,
    handlePaginationModelChange,
    handleSortModelChange
  } = useTableDataGridState()

  const { data, isLoading } = useListAdminRoles({
    pagination,
    filters
  })

  // Helpers
  const columns = listAdminRolesColumns

  // Handlers
  const handleDeleteAdminRole = async (id: string, row: any) => {
    await deleteAdminRole({
      userId: id
    })
  }

  // Render
  return (
    <ContentBox label='لیست دسترسی ها'>
      <TableDataGrid
        data={data}
        isLoading={isLoading}
        onPageChange={handlePaginationModelChange}
        onSortChange={handleSortModelChange}
        columns={columns}
        onFilterChange={handleFilterChange}
        disableAddRowButton={true}
        disableUpdateRowButton={true}
        onDeleteRow={handleDeleteAdminRole}
        onDeleteRowGetTitle={(row: BaseIdDataEntity<ListAdminRolesEntity>) =>
          `${row.data?.fullName}`
        }
      />
    </ContentBox>
  )
}
export default ListAdminRoles
