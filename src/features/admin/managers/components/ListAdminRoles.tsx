// React Type
import { useParams } from 'react-router-dom'

// Core Components
import ContentBox from '@schoolify/core/components/common/ContentBox'
import TableDataGrid from '@schoolify/core/components/common/TableDataGrid'
import useTableDataGridState from '@schoolify/core/hooks/common/useTableDataGridState'
import type { BaseIdDataEntity } from '@schoolify/core/types/core/api/response'
import useListAdminRoles from '../hooks/useListAdminRoles'
import useDeleteAdminRole from '../hooks/useDeleteUserRole'
import type ListAdminRolesEntity from '../types/api/ListAdminRolesEntity'
import { listAdminRolesColumns } from '../utilities/listUserRolesColumns'

// Custom Hooks

// Feature Components

// Custom Utilities

// Custom Types

// Custom Types
// interface ListStudentProps {}

const ListAdminRoles = () => {
  // Props
  // const {} = props;

  // Hooks
  const { schoolId = '' } = useParams()
  // const { mutateAsync: updateAdminRoles } = useUpdateAdminRole()
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
  // const handleUpdateAdminRoles = async (id: string, updatedFields: any) => {
  //   await updateAdminRoles({
  //     data: updatedFields,
  //     phoneNumber: id,
  //     schoolId: schoolId
  //   })
  // }

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
